import { Link } from "react-router-dom";

import {FaStar} from 'react-icons/fa';

import NoImage from "./no-image.png";

const imageUrl = import.meta.env.VITE_IMG;


const MovieCard = ({movie, showLink = true}) => {
  return (
    <div className="movie-card">
      {movie.poster_path ? <img src={imageUrl + movie.poster_path} alt={movie.title} /> : <img src={NoImage} />}
      
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  )
}

export default MovieCard