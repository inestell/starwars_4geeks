import { createContext, useEffect } from "react";
import { useState, useReducer } from "react";
import axios from "axios";

export const MyContext = createContext();

let url = "https://swapi.dev/api/people/?page=1";

let imgBase = "https://starwars-visualguide.com/assets/img/characters";

function AppContext ({children}) {
    const [data, setData] = useState([]);
    const [favorites, dispatch] = useReducer(favoritesReducer, JSON.parse(localStorage.getItem("favorites")) || []);
    const [filteredCharacters, setFilteredCharacters] = useState(data)
    
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites]);

    async function fetchData() {
        try {
            let response = await axios.get(url);
        
            let people = response.data.results.map((element, i) => {
                let img = `${imgBase}/${i + 1}.jpg`;
                return { ...element, img};
            });
            setData(people);
            setFilteredCharacters(people);
            localStorage.setItem("data", JSON.stringify(people))
        } catch (err) {
                console.error(err);
        }
    };

    function favoritesReducer(favorites, action) {
        switch(action.type) {
            case "add": {
               const newFavorite = action.payload;
               //localStorage.setItem("favorites", JSON.stringify(newFavorite))
                return [
                    ...favorites, 
                    newFavorite
                ]
            }

            case "delete": {
                const filteredFavorites = favorites.filter(item, i => item.name !== action.payload.name);
                //localStorage.removeItem("favorites", JSON.stringify(favorites.filter((item) => item.name !== person.name)));
                return filteredFavorites
            }
            default: 
                return favorites;
        }
    };


    
    
    

    return (
        <MyContext.Provider value={{data, 
                                    setData, 
                                    fetchData, 
                                    favoritesReducer, 
                                    favorites, 
                                    dispatch, 
                                    filteredCharacters, 
                                    setFilteredCharacters}}>
            {children}
        </MyContext.Provider>
    )
}

export default AppContext;