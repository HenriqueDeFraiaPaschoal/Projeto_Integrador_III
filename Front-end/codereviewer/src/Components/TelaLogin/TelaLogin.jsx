import './TelaLogin.css';
import '../../global.css'
import Login from '../Login/Login';
import Cadastro from '../Cadastro/Cadastro'

function TelaLogin() {
  return(
    <div className='tela-login'>
      <Login/>
      {/* <Cadastro/> */}
    </div>
  );
}

export default TelaLogin;