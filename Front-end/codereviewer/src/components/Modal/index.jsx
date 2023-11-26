import React from "react";
import "./style.css"; // Crie um arquivo CSS para estilizar o modal

export const Modal = ({ onClose, ...props }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close-button" onClick={onClose}>
          Fechar
        </button>
        <div className="modal-content">
          {/* Conteúdo do modal */}
          <h2>Modal de Publicação</h2>
          {/* Adicione qualquer conteúdo adicional aqui */}
        </div>
      </div>
    </div>
  );
};
