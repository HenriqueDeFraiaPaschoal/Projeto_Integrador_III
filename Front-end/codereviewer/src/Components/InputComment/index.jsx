import { AiOutlineClose } from 'react-icons/ai'
import "./style.css"

export const InputComment = () => {
  return (
    <div className="container-comment">
      <div className="content-comment">
        <p>Faça um comentário</p>
        <i className='icon-close'>
          <AiOutlineClose />
        </i>
      </div>
      <div className="textarea-wrapper">
        <textarea name="comment" id="comment-area" placeholder="Escreva..."></textarea>
        <button className="comment-btn">Comentar</button>
      </div>
    </div>
  )
}
