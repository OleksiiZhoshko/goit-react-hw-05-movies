import { useEffect, useState } from "react"
import { fetchMovieDetsById } from "../servise/appServise";
import { useParams, NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import DataMoviesDetails from "components/DataMoviesDetails/DataMoviesDetails";
import './MoviesDetails.css';

const MoviesDetails = () => {
    const [movieData, setMovieData] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();

    useEffect(() => {
        fetchMovieDetsById(id).then((resp) => {
            setMovieData(resp);
        });
    }, [id])

    const hendleGoBack = () => {
    navigate(location.state.from)
}

    if (!movieData) {
        return (
            <div>
                <h2>Loading data...</h2>
            </div>
        )
    }

    return (
        <div className="moviesdetails">
            <h1 className="home">Movies details</h1>
            <button type="button" onClick={hendleGoBack} className='moviesdetails_button'>Go to back</button>
           {movieData && <DataMoviesDetails data={movieData} />}
            <NavLink to='cast' state={{from: location.state.from}} className='moviesdetails_details'>Cast</NavLink>
            <NavLink to='reviews'state={{from: location.state.from}} className='moviesdetails_details'>Reviews</NavLink>
            < Outlet/>
        </div>
    )
}

export default MoviesDetails;

