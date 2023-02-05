import { NavLink, useLocation } from 'react-router-dom';
import { BASE_IMG_URL } from 'components/servise/constants';


export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <img src={BASE_IMG_URL(movie.poster_path)} alt={movie.title} width="100px"/>
          <NavLink to={`/movies/${movie.id}`} state ={{from: location,}}>{movie.title}</NavLink>
        </li>
      ))}
    </ul>
  );
};
