import { BASE_IMG_URL } from "components/servise/constants";
import  './DataMoviesDeteils.css';

const DataMoviesDetails = ({ data }) => {
  const {
    title,
    name,
    backdrop_path,
    poster_path,
    overview,
    genres,
    budget,
    vote_average,
  } = data;
  return (
    <div className="DataMoviesDetails" poster={BASE_IMG_URL(backdrop_path)}>
      <img src={BASE_IMG_URL(poster_path)} alt={title || name} />
      <h3>{title || name}</h3>
      <p>Raiting: {(vote_average * 10).toFixed(1)}%</p>
      <p>
        Genres:{' '}
        {genres
          .map(genre => {
            return genre.name;
          })
          .join(', ')}
      </p>
      <p>Overview: {overview}</p>
      <p>Budget: {budget}</p>
    </div>
  );
};

export default DataMoviesDetails;