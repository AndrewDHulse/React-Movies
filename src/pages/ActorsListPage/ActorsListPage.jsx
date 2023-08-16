import ActorCard from "../../components/ActorCard/ActorCard"

export default function ActorsListPage({movies}){

const actorsList= Array.from(new Set(movies.flatMap(movie=>movie.cast)))

    return(
        <div>
            <h1>Meet the stars</h1>
            <>
            {actorsList.map((actor, index) => (
            <ActorCard key={actor} actor={actor} index={index} />
            ))}
            </>
        </div>
    )
}