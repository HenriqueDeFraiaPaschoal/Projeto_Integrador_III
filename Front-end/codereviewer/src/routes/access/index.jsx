import { Outlet } from "react-router-dom";
import './style.css';

export const AccessPage = () => {

    return (
      <div className='tela-login'>
        <div className='container'>
          <Outlet/>
          <button className="cadastrar">Cadastrar-se</button>
          <img src="/img/logo.png" alt="Logo" />
        </div>

        <footer className='footer-login'>Code Reviewer</footer>
      </div>
    )
}