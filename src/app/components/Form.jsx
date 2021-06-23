import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: false,
      error: null,
    };
    this.sendImage = this.sendImage.bind(this);
  }

  sendImage(event) {
    event.preventDefault();
    this.setState({ data: [], error: null, loading: true });
    console.log("ok");
    try {
      const formData = new FormData();
      formData.append("name", event.target[0].value);
      formData.append("description", event.target[1].value);
      formData.append("uploadImage", event.target[2].files[0]);
      axios
        .post("http://localhost:3000/api/upload", formData)
        .then((data) =>
          this.setState({ data: data, error: "", loading: false })
        )
        .catch((err) => console.log(err));
    } catch (error) {
      this.setState({ data: false, error: error, loading: false });
    }
  }

  render() {
    return (
      <form action="/api/upload" onSubmit={this.sendImage}>
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
            required
          />
        </div>
        <div className="d-grid gap-2">
          <button
            type="submit"
            className="btn btn-primary"
            data-bs-target="#exampleModal"
          >
            Añadir imagen
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
