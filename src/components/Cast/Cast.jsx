import { useEffect, useState } from "react";
import { fetchCastInfo } from "../servise/appServise";
import { useParams } from "react-router-dom";
import { BASE_IMG_URL } from "components/servise/constants";
import './Cast.css'

const Cast = () => {
    const { id } = useParams();
    const [cast, setCast] = useState([])
    useEffect(() => {
        fetchCastInfo(id).then(setCast)
    }, [id]);
    return (
        <ul className="Cast_box">
            <h2 className="Cast_title">Cast</h2>
            {cast.map(actor => (
                <li key={actor.id} className='Cast_card'>
                    <img src={BASE_IMG_URL(actor.profile_path)} alt={actor.name} />
                    {actor.name}</li>
            ))}
        </ul>
    )
}

export default Cast;