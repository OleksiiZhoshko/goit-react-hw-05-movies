import { NavLink } from "react-router-dom";
import './Navigation.css'
const isActive = ({ isActive }) => isActive ? 'active_link' : 'link';

const Navigation = () => {
    return (
        <div className="Navigation">
            <NavLink to="/" className={isActive}>Home</NavLink>
            <NavLink to="movies" className={isActive}>Movies</NavLink>
        </div>
    )
};

export default Navigation;