import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import('./pages/Home'))
const Movies = lazy(() => import('./pages/Movies'))
const MoviesDetails = lazy(() => import('./pages/MoviesDetails'))
const Cast = lazy(() => import('./Cast/Cast'))
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Navigation = lazy(()=>import('./Navigation/Navigation'))


export const App = () => {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast/>}/>
          <Route path="Reviews" element={<Reviews/>}/>
        </Route>
      </Routes>
    </div>

  );
};