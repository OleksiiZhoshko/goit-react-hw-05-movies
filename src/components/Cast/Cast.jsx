import { useEffect, useState } from "react";
import { fetchCastInfo } from "../servise/appServise";
import { useParams } from "react-router-dom";
import { BASE_IMG_URL } from "components/servise/constants";

const Cast = () => {
    const { id } = useParams();
    const [cast, setCast] = useState([])
    useEffect(() => {
        fetchCastInfo(id).then(setCast)
    }, [id]);
    return (
        <div>
            <h2>Cast</h2>
            {cast.map(actor => (
                <li key={actor.id}>
                    <img src={BASE_IMG_URL(actor.profile_path)} alt={actor.name} width="100px"/>
                    {actor.name}</li>
            ))}
        </div>
    )
}

export default Cast;