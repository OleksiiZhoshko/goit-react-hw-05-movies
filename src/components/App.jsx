import { Routes, Route } from "react-router-dom";
import  Navigation  from "./Navigation/Navigation";
import  Home  from "./pages/Home";
import  Movies  from "./pages/Movies";
import  MoviesDetails  from "./pages/MoviesDetails";
import  Cast  from "./Cast/Cast";
import  Reviews  from "./Reviews/Reviews";
// import { lazy } from "react";

// const Home = lazy(()=>import('./pages/Home'))
// const Navigation = lazy(()=>import('././Navigation/Navigation'))
// const Movies = lazy(()=>import('./pages/Movies'))
// const MoviesDetails = lazy(()=>import('./pages/MoviesDetails'))
// const Cast = lazy(()=>import('./Cast/Cast'))
// const Reviews = lazy(()=>import('./Reviews/Reviews'))


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