import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { fetchMovieByQuery } from "../servise/appServise";
import { MoviesList } from "components/MoviesList/MoviesList";

const Movies = () => {
    const [query, setQuery] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('query');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (!searchQuery) {
            return
        }
        (async () => {
            try {
                const { results } = await fetchMovieByQuery(searchQuery);
                setMovies(results);
            } catch (err) {
                console.log(err)
            } finally {
                setQuery(searchQuery);
            }
        })();
    },[searchQuery])

    const hendleChenge = ({ target: { value } }) => {
        setQuery(value);
    }
    
    const hendleSubmit = (e) => {
        e.preventDefault();
        setSearchParams({ query });
    }

    return (
        <div>
            <h1>Movies</h1>
            <form onSubmit={hendleSubmit}>
                <input type="text" value={query} onChange={hendleChenge} />
                <button type="submit">search</button>
            </form>
            <MoviesList movies={movies}/>
        </div>
    )
}

export default Movies