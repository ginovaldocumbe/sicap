
import Login from './pages/login/login'
import Registo from './pages/registo/registo';
import Detalhes from './pages/detalhes/detalhes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/registo' element={<Registo />} />
        <Route path='/meus_detalhes' element={<Detalhes />} />
      </Routes>
    </Router>
  );
}

export default App;
