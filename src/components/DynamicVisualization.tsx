import { useEffect, useState } from 'react';

interface VisualizationData {
  enabled: boolean;
  content: string | null;
  updatedAt?: string;
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export function DynamicVisualization() {
  const [visualization, setVisualization] = useState<VisualizationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchVisualization();
  }, []);

  const fetchVisualization = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/api/visualization`);
      if (!response.ok) {
        throw new Error('Failed to fetch visualization');
      }
      const data = await response.json();
      setVisualization(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      console.error('Error fetching visualization:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return null;
  }

  if (error) {
    return null;
  }

  if (!visualization || !visualization.enabled || !visualization.content) {
    return null;
  }

  return (
    <div
      className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-8 shadow-lg"
      dangerouslySetInnerHTML={{ __html: visualization.content }}
    />
  );
}
