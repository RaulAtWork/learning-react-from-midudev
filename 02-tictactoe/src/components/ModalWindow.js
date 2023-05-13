import React from "react";

function ModalWindow({ children }) {
  return (
    <div className="modal-window">
      <div className="modal-content flex-center">{children}</div>
    </div>
  );
}

export default ModalWindow;
