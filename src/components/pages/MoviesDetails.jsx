import { useEffect, useState } from "react"
import { fetchMovieDetsById } from "../servise/appServise";
import { useParams, NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import { BASE_IMG_URL } from "components/servise/constants";

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
        <div>
            <h1>MoviesDetails</h1>
            <button type="button" onClick={hendleGoBack}>go back</button>
            <img src={BASE_IMG_URL(movieData.poster_path)} alt="" />
            <NavLink to='cast' state={{from: location.state.from}}>cast</NavLink>
            <NavLink to='reviews'state={{from: location.state.from}}>reviews</NavLink>
            < Outlet/>
        </div>
    )
}

export default MoviesDetails;
