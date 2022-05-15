import React from "react";
import "./Card.css";
import { Outlet, Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { useState } from "react";
import Typography from "@mui/material/Typography";
export default function CardComponent({ movie }) {
  const styles = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",

    filter: "blur(8)",
  };

  const [description, setDescription] = useState("");

  function hover() {
    setDescription(movie.overview);
  }
  return (
    <Link to="/#adit">
      <Card
        onMouseEnter={() => hover()}
        sx={{ maxWidth: 200 }}
        key={movie.id}
        className="card-container"
        id="cards"
        onMouseOut={() => setDescription("")}
      >
        <img
          className="movie-poster"
          id="movie-poster"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        />

        <CardContent style={{ color: "white" }}>
          <Typography gutterBottom variant="h5" component="div">
            {movie.original_title}
          </Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
        <CardActions style={{ color: "white" }}>
          <span size="small">Release Date </span>
          <span size="small">{movie.release_date}</span>
        </CardActions>
      </Card>
    </Link>
  );
}
