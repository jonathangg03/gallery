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
      const response = await fetch("http://localhost:3000/api/upload");
      const data = await response.json();
      this.setState({ data: data, error: "", loading: false });
    } catch (error) {
      this.setState({ data: false, error: error, loading: false });
    }
  }
  render() {
    return (
      <div className="pt-4 pb-4 cards-container">
        {this.state.data.map((image) => {
          return (
            <div key={image._id} className="ms-2 me-2">
              <Card {...image} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Gallery;
