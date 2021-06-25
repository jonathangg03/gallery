import React, { Component } from "react";
import Card from "./Card.jsx";
class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: false,
      error: null,
    };
  }

  async componentDidMount() {
    this.setState({ data: [], error: null, loading: true });
    try {
      let response = await fetch("http://localhost:3000/api/upload");
      let data = await response.json();
      this.setState({ data: data, error: "", loading: false });
      setInterval(async () => {
        response = await fetch("http://localhost:3000/api/upload");
        data = await response.json();
        this.setState({ data: data, error: "", loading: false });
      }, 2000);
    } catch (error) {
      this.setState({ data: false, error: error, loading: false });
    }
  }
  render() {
    return (
      <div className="row">
        <div className="container">
          <div className="row">
            {this.state.data.map((image) => {
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
  }
}

export default Gallery;
