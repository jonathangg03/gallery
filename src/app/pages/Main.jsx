import React from "react";
import Gallery from "../components/Gallery.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import AddModal from "../components/AddModal.jsx";
import DeleteModal from "../components/DeleteModal.jsx";
import "../styles/Main.css";

const Main = () => {
  return (
    <div className="container-fluid">
      <Header />
      <main className="row">
        <div className="d-grid gap-2">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#addModal"
          >
            Añadir nueva imagen +
          </button>
        </div>
        <Gallery />
      </main>
      <Footer />
      <AddModal />
      <DeleteModal />
    </div>
  );
};

export default Main;
