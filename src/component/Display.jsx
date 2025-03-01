import React from "react";
import { Card } from "./Card";

export const Display = ({ moviesdata = {} }) => {
  return (
    <div className="container mt-4 display">
      <div className="d-flex gap-2 mb-2">
        <button className="btn btn-warning">Action</button>
        <button className="btn btn-secondary">Drama</button>
        <button className="btn btn-primary">All</button>
      </div>
      <div className="cards row p-2">
        <div className="col-lg-4 col-md-6 col-12 mb-4 ">
          <Card moviesdata={moviesdata} />
        </div>
        <div className="col-lg-4 col-md-6 col-12 mb-4 ">
          <Card moviesdata={moviesdata} />
        </div>
        <div className="col-lg-4 col-md-6 col-12 mb-4 ">
          <Card moviesdata={moviesdata} />
        </div>
        <div className="col-lg-4 col-md-6 col-12 mb-4 ">
          <Card moviesdata={moviesdata} />
        </div>
      </div>
    </div>
  );
};
