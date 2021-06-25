import React, { Component } from "react";
import axios from "axios";
class DeleteModal extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: false,
      error: null,
    };
    this.deleteImage = this.deleteImage.bind(this);
  }

  handleRemoveId = () => {
    window.sessionStorage.removeItem("id");
  };

  deleteImage() {
    this.setState({ data: [], error: null, loading: true });
    axios
      .delete(
        `http://localhost:3000/api/upload/${window.sessionStorage.getItem(
          "id"
        )}`
      )
      .then((data) => this.setState({ data: data, error: "", loading: false }))
      .catch((error) =>
        this.setState({ data: false, error: error, loading: false })
      );
  }

  render() {
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
                onClick={this.handleRemoveId}
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
                onClick={this.handleRemoveId}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.deleteImage}
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
  }
}

export default DeleteModal;
