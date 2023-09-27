import './style.css';

export const Login = () => {

    return (
      <>
        <h1 className='titulo'>Entrar</h1>

        <form action="">
            <input className='input' type="email" placeholder="Insira seu email"/>
            <input className='input' type="password" placeholder="insira sua senha"/>

            <button className='entrar' href="#">Entrar</button>
        </form>
      </>
    )
}