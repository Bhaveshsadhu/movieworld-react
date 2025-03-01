import React from "react";

export const Card = ({ moviesdata = {} }) => {
  console.log(moviesdata);
  //   const { Plot, Poster, Title, imdbRating } = moviesdata;
  const Plot = moviesdata?.Plot || "Plot not available";
  const Poster = moviesdata?.Poster || "https://via.placeholder.com/150";
  const Title = moviesdata?.Title || "Title not available";
  const imdbRating = moviesdata?.imdbRating || "N/A";
  return (
    <div className="card d-flex justify-content-center align-items-center ">
      <div className="card-img">
        <img src={Poster} alt="" />
      </div>
      <div className="card-info p-3">
        <h3>{Title}</h3>
        <strong>{imdbRating}</strong>
        <p>{Plot ? Plot.slice(0, 50) + "..." : "..."}</p>
      </div>
      <div className="buttons d-flex justify-content-around align-items-center  gap-3">
        <button className="btn btn-warning"> Drama</button>
        <button className="btn btn-primary"> Action</button>
      </div>
      <button className="btn btn-danger d-grid my-2 ">Delete</button>
    </div>
  );
};
