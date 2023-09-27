import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { AccessPage, Login, Register } from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AccessPage/>}>
          <Route index element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
