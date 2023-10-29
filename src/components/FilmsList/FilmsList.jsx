import { useLocation } from "react-router-dom"
import { Link } from "./FilmsList.styled";

export const FilmsList = ({ films }) => {
    const location = useLocation();

    return (
        <div>
            <ul>
                {films.map(film => (
                    <li key={film.id}>
                        <Link to={`/movies/${film.id}`} state={{from: location}}>{film.title || film.name}</Link>
                    </li>
                ))}
            </ul>
        </div>)
}