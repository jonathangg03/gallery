import React from "react";

const Card = ({ _id, name, date, description, imageUrl }) => {
  const handleDelete = () => {
    if (window.sessionStorage.getItem("id")) {
      window.sessionStorage.removeItem("id");
    }
    window.sessionStorage.setItem("id", _id);
  };

  return (
    <div>
      <div className="card mb-4">
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">{date}</p>
          <a href={imageUrl} className="btn btn-primary" target="_blank">
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

export default Card;
