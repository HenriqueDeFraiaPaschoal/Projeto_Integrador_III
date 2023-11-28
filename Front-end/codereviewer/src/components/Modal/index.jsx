import { IoMdCloseCircleOutline } from "react-icons/io";
import React from "react";
import "./style.css";

export const Modal = ({ onClose, ...props }) => {
  const handlePublish = () => {
    // Exibe a caixa de diálogo de confirmação
    const shouldPublish = window.confirm("Deseja realmente publicar seu código?");

    // Se o usuário escolher "OK", continua com a ação de publicar
    if (shouldPublish) {
      console.log("Publicando o código...");
      // lógica da publicação
    }
  };

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
