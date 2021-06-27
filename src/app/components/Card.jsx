import React from "react";
import { connect } from "react-redux";
import * as imageActions from "../actions/imageActions";

const Card = ({ _id, name, date, description, imageUrl, setId, delete_id }) => {
  const handleDelete = () => {
    setId(_id);
  };

  return (
    <div className="">
      <div className="card mb-4">
        <img src={imageUrl} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">{date}</p>
          <a href={imageUrl} className="btn btn-primary me-2" target="_blank">
            Ver imagen
          </a>
          <button
            href="#"
            className="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#deleteModal"
            onClick={handleDelete}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ imageReducer }) => imageReducer;
export default connect(mapStateToProps, imageActions)(Card);
