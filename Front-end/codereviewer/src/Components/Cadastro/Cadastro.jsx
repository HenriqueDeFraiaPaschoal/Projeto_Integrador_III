import '../Formulario/Formulario.css';
import '../../global.css';
import '../Cadastro/Cadastro.css';
import Formulario from '../Formulario/Formulario'

function Cadastro() {
  return (
    <div className="cadastro-container">
      <Formulario
        titulo="Bem-Vindo"
        emailPlaceholde="Forneça um email"
        senhaPlaceholder="Crie uma senha"
        toggleButton={false}
      />
      <div className='btnVoltarWrapper'>
        <a className='btnVoltar' href="#">Voltar</a>
      </div>
    </div>
  );
}

export default Cadastro;