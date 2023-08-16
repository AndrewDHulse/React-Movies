export default function ActorCard({ actor, index }) {
    const color = `hsl(${(index * 360) / 65}, 100%, 50%)`; 
    return (
    <div
        className="actor-card"
        style={{
        backgroundColor: color,
        }}
    >
        {actor}
    </div>
    );
}