export default function Card({ cardObject }) {
    return (
        <div className="movie">
            <div>
                <p>{cardObject.Year}</p>
            </div>
            <div>
                <img src={cardObject.Poster !== "N/A" ? cardObject.Poster : "https://via.placeholder.com/400"} alt={cardObject.Title} />
            </div>
            <div>
                <span>{cardObject.Type}</span>
                <h3>{cardObject.Title}</h3>
            </div>
        </div>
    )
}

