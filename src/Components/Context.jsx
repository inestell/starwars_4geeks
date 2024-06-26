import { createContext } from "react";
import { useState, useReducer } from "react";
import axios from "axios";

export const MyContext = createContext();

let url = "https://swapi.dev/api/people/?page=1";

let imgBase = "https://starwars-visualguide.com/assets/img/characters";

function AppContext ({children}) {
    const [data, setData] = useState([]);
    

    async function fetchData() {
        try {
            let response = await axios.get(url);
        
            let people = response.data.results.map((element, i) => {
                let img = `${imgBase}/${i + 1}.jpg`;
                return { ...element, img};
            });
        setData(people);
        console.log(people);
        } catch (err) {
                console.error(err);
        }
    };

    function favoritesReducer(favorites, action) {
        switch(action.type) {
            case "add": {
                return [
                    ...favorites, 
                    action.payload
                ]
            }

            case "delete": {
                return favorites.filter((item, i) => {
                        i !== action.id
                    })
            }
            case "click": {
                <Link to></Link>
            }
        }
    }

    
    

    return (
        <MyContext.Provider value={{data, setData, fetchData, favoritesReducer}}>
            {children}
        </MyContext.Provider>
    )
}

export default AppContext;