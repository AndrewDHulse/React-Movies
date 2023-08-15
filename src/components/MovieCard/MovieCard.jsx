import {Link} from 'react-router-dom'

export default function MovieCard({movie}){
    const title = movie.title;
    return (
        <Link to={`movies/${title}`}>
            <div style={{background : `url(${movie.posterPath})`, height:500, width: 500,}}>
                <div>
                    <h2>{movie.title}</h2>     
                    {movie.releaseDate}
                </div>
            </div>
        </Link>
    )
}