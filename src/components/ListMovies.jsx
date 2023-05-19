import gamesObject from '../data/games.json';
import { Image } from 'react-bootstrap';



function ListMovies() {
    const games = gamesObject.games;
    return (
        <div className="container">
        <div className="row g-1">
            {games.map((game) => (
                <div key={game.name} className="col-2 ">
                    <div className="card">
                    <Image src={game.coverUrl} alt={game.name} />
                    </div>
                </div>
            ))}
        </div>
        </div>
    )
}



export default ListMovies;