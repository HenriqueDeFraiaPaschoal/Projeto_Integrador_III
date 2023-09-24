import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TelaLogin from './pages/TelaLogin/TelaLogin'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/Login" element={<TelaLogin/>}/>
      </Routes>
    </Router>
  );
}

export default App;
