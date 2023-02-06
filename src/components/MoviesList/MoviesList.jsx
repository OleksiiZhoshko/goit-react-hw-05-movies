import { NavLink, useLocation } from 'react-router-dom';
import { BASE_IMG_URL } from 'components/servise/constants';
import './MoviesList.css'

const isActive = ({ isActive }) => isActive ? 'active_card' : 'card';
export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className='render_List'>
      {movies.map(movie => (
        <li className='renderCard' key={movie.id}>          
          <NavLink to={`/movies/${movie.id}`} state={{ from: location, }} className={isActive}>
            <img src={BASE_IMG_URL(movie.poster_path)} alt={movie.title} className='render_foto'/>
            {movie.title}</NavLink>
        </li>
      ))}
    </ul>
  );
};
