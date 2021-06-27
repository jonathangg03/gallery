import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as imageActions from "../actions/imageActions";
import Spinner from "./Spinner.jsx";
import Card from "./Card.jsx";

const Gallery = ({ getImage, image, loading, error }) => {
  useEffect(() => {
    getImage();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="row">
      <div className="container">
        <div className="row">
          {image.map((image) => {
            return (
              <div
                key={image._id}
                className="col-12 col-sm-6 col-lg-4 col-xl-3"
              >
                <Card {...image} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ imageReducer }) => imageReducer;

export default connect(mapStateToProps, imageActions)(Gallery);
