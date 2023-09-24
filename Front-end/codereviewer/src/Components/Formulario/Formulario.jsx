import '../Formulario/Formulario.css';
import '../../global.css';

function Formulario({titulo, emailPlaceholde, senhaPlaceholder, toggleButton}) {
  return (
    <div className='container'>
        <h1 className='titulo'>{titulo}</h1>

        <form action="">
          <input className='input' type="email" placeholder={emailPlaceholde}/>
          <input className='input' type="password" placeholder={senhaPlaceholder}/>

          {/* <a className='entrar' href="#">Entrar</a> */}
          {toggleButton && <a className='entrar' href="#">Entrar</a>}
          <a className='cadastrar' href="#">Cadastrar-se</a>

        </form>

        <img src="/img/logo.png" alt="Logo" />
      </div>
  );
}

export default Formulario;