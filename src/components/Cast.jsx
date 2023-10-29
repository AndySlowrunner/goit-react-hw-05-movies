import { useEffect, useState } from "react"
import { getFilmCredits } from "./Service"
import { useParams } from "react-router-dom";

const Cast = () => {
    const { id } = useParams();
    const [ actors, setActors ] = useState([]);

    useEffect(() => {
        getFilmCredits(id)
            .then((response) => {
                const filmCast = response;
                setActors(filmCast);
            })
            .catch(error => {
                console.error('Помилка при запиті:', error);
            })
    }, [id])

    return (
        <div>
            {actors.cast ? (
                <div>
                    <ul>
                        {actors.cast.map((person, index) => (
                            <div key={index}>
                                <img
                                    src={person.profile_path ? `https://image.tmdb.org/t/p/w500/${person.profile_path}` : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'}
                                    width={120}
                                    alt="profile"
                                />
                                <li key={person.id}>{person.name}</li>
                                <p>Character: {person.character}</p>
                            </div>
                        ))}
                    </ul>
                </div>
            ) : null}
        </div>
    )
}

export default Cast;