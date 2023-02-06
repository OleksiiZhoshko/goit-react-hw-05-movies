import { useEffect, useState } from "react";
import { fetchDayTrend } from "../servise/appServise";
import { MoviesList } from "../MoviesList/MoviesList";
import './Home.css';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        (async () => {
            try {
                const {results} = await fetchDayTrend();
                setMovies(results)
            } catch (err) {
                console.log(err)
            } finally {
                setIsLoading(false)
}
        })();
    }, []);

    if (isLoading) {
        <div>
            <h2>Loading...</h2>
    </div>
}

    return (
        <div>
            <h1 className="home">Trend by you</h1>
            <MoviesList movies={movies}/>
        </div>
    )
}

export default Home;