import React from "react";
import Form from "./Form.jsx";

const Modal = () => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Ingrese los datos de la imagen
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <Form />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
              Añadir imagen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
