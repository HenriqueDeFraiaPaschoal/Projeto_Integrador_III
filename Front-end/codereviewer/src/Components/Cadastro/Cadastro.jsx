import '../Formulario/Formulario.css';
import '../../global.css';
import '../Cadastro/Cadastro.css';
import Formulario from '../Formulario/Formulario'

function Cadastro() {
  return (
    <div className='selecionado'>
      <Formulario
      titulo="Bem-Vindo"
        emailPlaceholde="Forneça um email"
        senhaPlaceholder="Crie uma senha"
        toggleButton={false}/>

        <a className='btnVoltar' href="#">Voltar</a>
      </div>
  );
}

export default Cadastro;