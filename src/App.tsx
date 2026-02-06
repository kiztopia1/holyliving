import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ReviewUs from './pages/ReviewUs';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/review" element={<ReviewUs />} />
    </Routes>
  );
}

export default App;
