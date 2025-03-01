import React from "react";
import { Card } from "./Card";

export const Hero = ({ moviesdata }) => {
  // Destructure movie data to get relevant fields
  const { Poster, Title, imdbRating, Plot } = moviesdata;

  const style = {
    backgroundImage: `url(${Poster})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "80vh",
    width: "100%",
  };

  return (
    <div className="container">
      <div className="header py-3 text-danger fw-bold shadow">Movie World</div>
      <div
        className="d-flex justify-content-center align-items-center py-3"
        style={style}
      >
        <Card moviesdata={moviesdata} />
      </div>
    </div>
  );
};
