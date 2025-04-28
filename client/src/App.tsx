import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import LinksPage from './components/LinksPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="w-screen">
        <Routes>
          <Route path="/" element={<LinksPage />} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;