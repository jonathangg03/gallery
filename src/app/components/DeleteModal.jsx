import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import * as imageActions from "../actions/imageActions";

const DeleteModal = ({ getImage }) => {
  const handleRemoveId = () => {
    window.sessionStorage.removeItem("id");
  };

  const deleteImage = () => {
    axios
      .delete(
        `http://localhost:3000/api/upload/${window.sessionStorage.getItem(
          "id"
        )}`
      )
      .then((data) => getImage())
      .catch((error) => console.log(error));
  };

  return (
    <div
      className="modal fade"
      id="deleteModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Eliminar imagen
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleRemoveId}
            ></button>
          </div>
          <div className="modal-body">
            <h3>¿Seguro que desea eliminar esta imagen?</h3>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={handleRemoveId}
            >
              Cancelar
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                deleteImage();
                handleRemoveId();
              }}
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ imageReducer }) => imageReducer;
export default connect(mapStateToProps, imageActions)(DeleteModal);
