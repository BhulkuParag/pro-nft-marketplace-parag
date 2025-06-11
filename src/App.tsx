import { Button, Typography } from '@mui/material';
import './App.css';

function App() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <Typography variant="h4" className="mb-4">
        MUI + Tailwind + Vite + TypeScript 🚀
      </Typography>

      <Button variant="contained" color="primary">
        MUI Button
      </Button>

      <div className="mt-4 p-4 bg-white rounded shadow">
        <p className="text-gray-700">This box uses Tailwind styling.</p>
      </div>
    </div>
  );
}

export default App;
