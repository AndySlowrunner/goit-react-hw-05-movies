import { Link } from "react-router-dom"

export const FilmsList = ({films}) => {
    return (
        films.length > 0 ? (
            <div>
                <ul>
                    {films.map(film => (
                        <li key={film.id}>
                            <Link to={`/movies/${film.id}`}>{film.title || film.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>) : null)
}