import { useLocation } from "react-router-dom"
import { Link } from "./FilmList.styled";

export const FilmsList = ({ films }) => {
    const location = useLocation();

    return (
        films.length > 0 ? (
            <div>
                <ul>
                    {films.map(film => (
                        <li key={film.id}>
                            <Link to={`/movies/${film.id}`} state={{from: location}}>{film.title || film.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>) : null)
}