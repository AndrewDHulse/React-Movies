import MovieCard from '../../components/MovieCard/MovieCard';

export default function MoviesListPage({movies}){
    return (
        <>
            {movies.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
            ))}
        </>
    );
}