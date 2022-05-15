import { queries } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./Search.css";
import { Row } from "antd";
import { Col } from "antd";
import Divider from "@mui/material/Divider";
export default function SearchMovie() {
  const [query, setQuery] = useState("Search");
  const [movies, setMovies] = useState([]);

  const SearchMovies = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=da128f0f40bdeb2660ba6801fe504117&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("response", data.results);
      if (data.results && data.results.length > 0) {
        setMovies(data.results);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    SearchMovies();
    console.log("---<>>>ss", movies);
  }, [query]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div className="outer-container">
      <form className="form">
        <label className="label" htmlFor="query">
          Movie Name:
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="search a movie"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button">Search</button>
      </form>
      <div className="divider"></div>
      <div className="card-list">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            style={{ marginTop: "20px" }}
            container
            spacing={{ xs: 12, md: 6 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            alignItems="flex-end"
          >
            {movies.map((movie, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <MovieCard movie={movie} key={movie.id} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
}
