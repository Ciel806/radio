import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Programs from './pages/programs.jsx';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/programs' element={<Programs />} />
    </Routes>
  );
}

export default App;