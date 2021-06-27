import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as imageActions from "../actions/imageActions";
import Gallery from "../components/Gallery.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import AddModal from "../components/AddModal.jsx";
import DeleteModal from "../components/DeleteModal.jsx";
import "../styles/Main.css";

const Main = (props) => {
  useEffect(() => {
    props.getImage();
  }, []);
  return (
    <div className="container-fluid">
      <Header />
      <main className="row">
        <div className="container">
          <div className="row pb-3">
            <button
              type="button"
              className="btn btn-primary m-auto col-11 add_btn"
              data-bs-toggle="modal"
              data-bs-target="#addModal"
              onClick={() => console.log(props)}
            >
              Añadir nueva imagen +
            </button>
          </div>
          <Gallery />
        </div>
      </main>
      <Footer />
      <AddModal />
      <DeleteModal />
    </div>
  );
};

const mapStateToProps = ({ imageReducer }) => imageReducer;

export default connect(mapStateToProps, imageActions)(Main);
