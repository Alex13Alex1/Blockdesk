const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3001;
const DATA_FILE = path.join(__dirname, 'visualization.json');

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static('public'));

// Ensure data file exists
async function ensureDataFile() {
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, JSON.stringify({ enabled: false, content: null }, null, 2));
  }
}

// GET visualization
app.get('/api/visualization', async (req, res) => {
  try {
    await ensureDataFile();
    const data = await fs.readFile(DATA_FILE, 'utf8');
    const visualization = JSON.parse(data);
    res.json(visualization);
  } catch (error) {
    console.error('Error reading visualization:', error);
    res.status(500).json({ error: 'Failed to read visualization' });
  }
});

// POST visualization (save)
app.post('/api/visualization', async (req, res) => {
  try {
    await ensureDataFile();
    const { enabled, content } = req.body;
    
    const visualization = {
      enabled: enabled !== undefined ? enabled : true,
      content: content || null,
      updatedAt: new Date().toISOString()
    };
    
    await fs.writeFile(DATA_FILE, JSON.stringify(visualization, null, 2));
    res.json({ success: true, visualization });
  } catch (error) {
    console.error('Error saving visualization:', error);
    res.status(500).json({ error: 'Failed to save visualization' });
  }
});

// Admin page
app.get('/admin', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blockdesk - Visualization Admin</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      padding: 20px;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      border-radius: 12px;
      padding: 30px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    h1 {
      color: #1e293b;
      margin-bottom: 10px;
    }
    .subtitle {
      color: #64748b;
      margin-bottom: 30px;
    }
    .form-group {
      margin-bottom: 20px;
    }
    label {
      display: block;
      margin-bottom: 8px;
      color: #334155;
      font-weight: 500;
    }
    input[type="checkbox"] {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
    textarea {
      width: 100%;
      min-height: 300px;
      padding: 12px;
      border: 2px solid #e2e8f0;
      border-radius: 8px;
      font-family: 'Courier New', monospace;
      font-size: 14px;
      resize: vertical;
    }
    textarea:focus {
      outline: none;
      border-color: #667eea;
    }
    button {
      background: #667eea;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
    }
    button:hover {
      background: #5568d3;
    }
    .status {
      margin-top: 20px;
      padding: 12px;
      border-radius: 8px;
      display: none;
    }
    .status.success {
      background: #d1fae5;
      color: #065f46;
      display: block;
    }
    .status.error {
      background: #fee2e2;
      color: #991b1b;
      display: block;
    }
    .info {
      background: #eff6ff;
      border-left: 4px solid #3b82f6;
      padding: 12px;
      margin-bottom: 20px;
      border-radius: 4px;
    }
    .info code {
      background: #e0e7ff;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎨 Visualization Admin</h1>
    <p class="subtitle">Manage platform overview visualization</p>
    
    <div class="info">
      <strong>API Endpoints:</strong><br>
      GET <code>/api/visualization</code> - Get current visualization<br>
      POST <code>/api/visualization</code> - Save visualization (body: {enabled: boolean, content: string})
    </div>

    <form id="visualizationForm">
      <div class="form-group">
        <label>
          <input type="checkbox" id="enabled" checked>
          Enable visualization on frontend
        </label>
      </div>

      <div class="form-group">
        <label for="content">Visualization Content (SVG or HTML):</label>
        <textarea id="content" placeholder="Paste your SVG or HTML content here..."></textarea>
      </div>

      <button type="submit">💾 Save Visualization</button>
    </form>

    <div id="status" class="status"></div>
  </div>

  <script>
    const form = document.getElementById('visualizationForm');
    const status = document.getElementById('status');
    const enabled = document.getElementById('enabled');
    const content = document.getElementById('content');

    // Load current visualization
    async function loadVisualization() {
      try {
        const res = await fetch('/api/visualization');
        const data = await res.json();
        enabled.checked = data.enabled !== false;
        content.value = data.content || '';
      } catch (error) {
        showStatus('Error loading visualization: ' + error.message, 'error');
      }
    }

    // Save visualization
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      try {
        const res = await fetch('/api/visualization', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            enabled: enabled.checked,
            content: content.value
          })
        });

        const data = await res.json();
        
        if (res.ok) {
          showStatus('✅ Visualization saved successfully!', 'success');
        } else {
          showStatus('❌ Error: ' + (data.error || 'Failed to save'), 'error');
        }
      } catch (error) {
        showStatus('❌ Error: ' + error.message, 'error');
      }
    });

    function showStatus(message, type) {
      status.textContent = message;
      status.className = 'status ' + type;
      setTimeout(() => {
        status.className = 'status';
      }, 5000);
    }

    // Load on page load
    loadVisualization();
  </script>
</body>
</html>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
  console.log(`📊 Admin panel: http://localhost:${PORT}/admin`);
  console.log(`🔌 API: http://localhost:${PORT}/api/visualization`);
});
