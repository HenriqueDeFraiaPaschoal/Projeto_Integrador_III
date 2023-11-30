import { IoMdCloseCircleOutline } from "react-icons/io";
import React from "react";
import "./style.css";
import { NewPost } from "services/users";

export const Modal = ({ onClose, ...props }) => {
  const [post, setPost] = React.useState();
  const [userID, setUserID] = React.useState("");

  const handlePublish = React.useCallback(async () => {
    // Exibe a caixa de diálogo de confirmação
    const shouldPublish = window.confirm(
      "Deseja realmente publicar seu código?"
    );

    // Se o usuário escolher "OK", continua com a ação de publicar
    const data = { content: post, postDate: new Date(), userId: userID };

    if (shouldPublish) {
      console.log("Publicando o código...");
      // lógica da publicação
      try {
        const response = await NewPost(data);
        const info = await response.data;

      } catch (e) {
        // Adicionar tratamento de erro...
      }
    }
  }, [post, userID]);
  React.useEffect(() => {
    setUserID(localStorage.getItem("USER_ID" || ""));
  }, []);


  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="info-post">
          <p>Compartilhe seu código</p>
          <button className="modal-close-button" onClick={onClose}>
            <IoMdCloseCircleOutline />
          </button>
        </div>
        <div className="post-content-modal">
          <textarea
            name="post"
            id="post"
            cols=""
            rows=""
            placeholder="Escreva..."
            value={post}
            onChange={(e) => setPost(e.target.value)}
          ></textarea>
          <div className="btn-post-container">
            <button className="btn-post" onClick={handlePublish}>
              Publicar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
