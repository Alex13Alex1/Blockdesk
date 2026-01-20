# Blockdesk

A React + TypeScript application with comprehensive error handling for API responses.

## Features

- 🎯 Type-safe error handling
- ⚛️ React with TypeScript
- 🎨 Tailwind CSS for styling
- ⚡ Vite for fast development
- 🔄 Reusable error display components

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Error Handling

This project includes a robust error handling system for API errors:

- **Error Types**: TypeScript interfaces matching common API error structures
- **Error Utilities**: Helper functions to check error types and extract messages
- **Error Display Component**: A reusable React component for displaying errors with retry functionality

### Example Error Structure

```typescript
{
  error: "ERROR_UNAUTHORIZED",
  details: {
    title: "Unauthorized request.",
    detail: "User is unauthorized",
    isRetryable: false,
    additionalInfo: {},
    buttons: [],
    planChoices: []
  },
  isExpected: true
}
```

## Project Structure

```
src/
  ├── components/     # React components
  ├── types/          # TypeScript type definitions
  ├── utils/          # Utility functions
  └── App.tsx         # Main application component
```

## Technologies

- React 18
- TypeScript
- Vite
- Tailwind CSS
