import React, { useEffect, useState } from "react";

export const Card = ({ moviesdata = {}, setDramaList, setActionList }) => {
  // console.log(moviesdata);
  //   const { Plot, Poster, Title, imdbRating } = moviesdata;
  const Plot = moviesdata?.Plot || "Plot not available";
  const Poster = moviesdata?.Poster || "https://via.placeholder.com/150";
  const Title = moviesdata?.Title || "Title not available";
  const imdbRating = moviesdata?.imdbRating || "N/A";
  const [showcard, setShowCard] = useState(true);

  const handleOnDelete = () => {
    setShowCard(false);
  };

  useEffect(() => {
    setShowCard(true);
  }, [moviesdata]);

  const addDramaActionList = (str) => {
    // console.log(str);
    if (str === "drama") {
      setDramaList((prevList) => [...prevList, moviesdata]);
      alert("Movie added to Drama Collection List");
    }
    if (str === "action") {
      setActionList((prevList) => [...prevList, moviesdata]);
      alert("Movie added to Action Collection List");
    }
  };

  return (
    <>
      {showcard && (
        <div className="card d-flex justify-content-center align-items-center showmovie">
          <div className="card-img">
            <img src={Poster} alt="" />
          </div>
          <div className="card-info p-3">
            <h3>{Title}</h3>
            <strong>{imdbRating}</strong>
            <p>{Plot ? Plot.slice(0, 50) + "..." : "..."}</p>
          </div>
          <div className="buttons d-flex justify-content-around align-items-center  gap-3">
            <button
              className="btn btn-warning"
              onClick={() => addDramaActionList("drama")}
            >
              Drama
            </button>
            <button
              className="btn btn-primary"
              onClick={() => addDramaActionList("action")}
            >
              Action
            </button>
          </div>
          <button
            className="btn btn-danger d-grid my-2"
            onClick={handleOnDelete}
          >
            Delete
          </button>
        </div>
      )}
    </>
  );
};
