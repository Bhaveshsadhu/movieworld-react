import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Hero } from "./component/Hero";
import { Display } from "./component/Display";
import { fetchData } from "./Utils/axios";

function App() {
  const [moviesdata, setMoviesData] = useState({});
  const isFetchedRef = useRef(false);
  const [dramalist, setDramaList] = useState([]);
  const [actionlist, setActionList] = useState([]);
  function getRandomCharacter() {
    const characters = "abcdefghijklmnopqrstuvwxyz";
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  }

  useEffect(() => {
    const fetchDataAndSetMovies = async () => {
      const randomStr = getRandomCharacter();
      try {
        const data = await fetchData(randomStr);
        if (data) {
          setMoviesData(data); // Set fetched movie data
        } else {
          console.error("No data found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (!isFetchedRef.current) {
      fetchDataAndSetMovies();
    }
    // fetchDataAndSetMovies();

    isFetchedRef.current = true;
  }, []);
  // console.log(moviesdata);
  return (
    <div>
      {moviesdata ? (
        <Hero
          moviesdata={moviesdata}
          setDramaList={setDramaList}
          setActionList={setActionList}
        />
      ) : (
        <p>Loading...</p>
      )}
      {moviesdata ? (
        <Display dramalist={dramalist} actionlist={actionlist} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
