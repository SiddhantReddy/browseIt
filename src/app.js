import {useState, useEffect} from "react";
import './app.css'
import SearchIcon from './search.svg'
import Card from "./card";

const OMDB_URL = "https://www.omdbapi.com/?apikey=6daa1075";

export default function App(){
    const [cards, setCards] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    const searchMovies = async(title) => {
        const response = await fetch(`${OMDB_URL}&s=${title}`);
        const data = await response.json();
        setCards(data.Search)
        console.log("moviesResposne : ", data.Search);
    }

    useEffect(() => {
        searchMovies("spiderman")
    }, [])
    return(
        <div className="app">
            <h1>BrowseIt</h1>

            <div className="search">
                <input
                    placeholder="Search"
                    value = {searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {
                cards?.length > 0 ? (
                    <div className="container">
                        {cards.map((card) => (
                          <Card cardObject={card}/> 
                        ))}
                    </div>
                 ) : (
                    <div className="empty">
                       <h2> Nothing to browse </h2>
                    </div>
                 )
            }

            
        </div>
    )
}