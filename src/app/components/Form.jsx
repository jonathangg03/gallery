import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form action="">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Titulo de la imagen
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            name="name"
            placeholder="Titulo..."
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
          />
        </div>
      </form>
    );
  }
}

export default Form;
