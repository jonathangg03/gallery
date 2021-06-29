import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import * as imageActions from "../actions/imageActions";

const Form = ({ getImage }) => {
  const sendImage = (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", event.target[0].value);
      formData.append("description", event.target[1].value);
      formData.append("uploadImage", event.target[2].files[0]);
      axios.post("/api/upload", formData).then((data) => {
        getImage();
        event.target.reset();
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form action="/api/upload" onSubmit={sendImage}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Titulo de la imagen
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          name="name"
          placeholder="Titulo..."
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Descripción
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          name="description"
          required
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="formFile" className="form-label">
          Archivo de la imagen
        </label>
        <input
          className="form-control"
          type="file"
          id="formFile"
          name="uploadImage"
          accept="image/png, image/jpeg image/jpg"
          required
        />
      </div>
      <div className="d-grid gap-2">
        <button
          type="submit"
          className="btn btn-primary"
          data-bs-target="#exampleModal"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          Añadir imagen
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = ({ imageReducer }) => imageReducer;

export default connect(mapStateToProps, imageActions)(Form);
