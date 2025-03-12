import React, { useEffect, useRef, useState } from "react";
import { Card } from "./Card";
import { fetchData } from "../Utils/axios";

export const Hero = ({ moviesdata, setDramaList, setActionList }) => {
  // Destructure movie data to get relevant fields
  const [mvdata, setMvData] = useState(moviesdata);
  const { Poster, Title, imdbRating, Plot } = mvdata;
  const searchRef = useRef("");
  const [searching, setSearching] = useState(false);

  // Load initial movie data when the component mounts
  useEffect(() => {
    setMvData(moviesdata || {}); // Ensures it updates when moviesdata changes
  }, [moviesdata]);
  // console.log(mvdata);
  const handleOnSearch = () => {
    const str = searchRef.current.value;
    fetchMovieonSearch(str);
    if (str === "") {
      setSearching(false);
    } else {
      setSearching(true);
    }
  };
  const fetchMovieonSearch = async (str) => {
    try {
      const data = await fetchData(str);
      if (data) {
        // moviesdata = data;
        setMvData(data);
      } else {
        console.log("Data Not Found");
      }
    } catch {
      console.log("Error");
    }
  };

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
      <div className="flex hero py-3" style={style}>
        <div className="flex hero-content showmovie">
          <div className="flex hero-title">
            <h1>Search Millions of Movies</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              similique tempora consequatur reprehenderit possimus accusantium?
            </p>
          </div>
          <div className="input-group mb-3 search">
            <input
              type="text"
              className="form-control "
              placeholder="Search Movie"
              aria-label="Search Movie"
              aria-describedby="button-addon2"
              ref={searchRef}
            />
            <button
              className="btn btn-warning"
              type="button"
              id="button-addon2"
              onClick={handleOnSearch}
            >
              Search
            </button>
          </div>
        </div>
        {searching && (
          <div className="card-container showmovie">
            <Card
              moviesdata={mvdata}
              setDramaList={setDramaList}
              setActionList={setActionList}
            />
          </div>
        )}
      </div>
    </div>
  );
};
