import '../Formulario/Formulario.css';
import '../../global.css';
import Formulario from '../Formulario/Formulario'

function Login() {
  return (
    <Formulario
      titulo="Login"
      emailPlaceholde="Insira seu email"
      senhaPlaceholder="Insira sua senha"
      toggleButton={true}/>
  );
}

export default Login;