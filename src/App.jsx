import { useEffect, useState } from "react";
import "./App.css";
import { Hero } from "./component/Hero";
import { Display } from "./component/Display";
import { fetchData } from "./Utils/axios";

function App() {
  const [moviesdata, setMoviesData] = useState({});
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

    fetchDataAndSetMovies();
  }, []);
  // console.log(moviesdata);
  return (
    <div>
      {moviesdata ? <Hero moviesdata={moviesdata} /> : <p>Loading...</p>}
      {moviesdata ? <Display moviesdata={moviesdata} /> : <p>Loading...</p>}
      {/* <Display /> */}
    </div>
  );
}

export default App;
