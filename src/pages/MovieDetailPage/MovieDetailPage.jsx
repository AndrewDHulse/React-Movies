import { useParams } from "react-router-dom"

export default function MovieDetailPage({movies}){
    let { movieName } = useParams();
    const selectedMovie = movies.find((movie)=> movie.title === movieName);
    return(
        <div>
            <img src={selectedMovie.posterPath} alt={selectedMovie.title} />
            <h2>Movie: {selectedMovie.title}</h2>
            <p>Release Date: {selectedMovie.releaseDate}</p>
            <h4>Starring: </h4>
            <ul>
                {selectedMovie.cast.map(actor =>
                    <li>{actor}</li>    
                )}
            </ul>
        </div>
    )
}