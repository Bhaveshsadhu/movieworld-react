import React, { useState } from "react";
import { Card } from "./Card";

export const Display = ({ dramalist, actionlist }) => {
  const [mvAllList, setMvAllList] = useState([]);

  // Display Drama movies
  const displayDrama = () => {
    setMvAllList(dramalist); // Only set the drama list
    // console.log(mvAllList);
  };

  // Display Action movies
  const displayAction = () => {
    setMvAllList(actionlist); // Only set the action list
    // console.log(mvAllList);
  };

  // Display All movies (Drama + Action)
  const displayAll = () => {
    setMvAllList([...actionlist, ...dramalist]); // Combine both lists
    // console.log(mvAllList);
  };

  return (
    <div className="container mt-4 display">
      <div className="d-flex gap-2 mb-2">
        <button className="btn btn-warning" onClick={displayAction}>
          Action
        </button>
        <button className="btn btn-secondary" onClick={displayDrama}>
          Drama
        </button>
        <button className="btn btn-primary" onClick={displayAll}>
          All
        </button>
      </div>
      <div className="cards row p-2">
        {/* Rendering cards dynamically based on the selected movie list */}
        {mvAllList.map((movie, index) => (
          <div className="col-lg-4 col-md-6 col-12 mb-4 ">
            <Card key={index} moviesdata={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};
