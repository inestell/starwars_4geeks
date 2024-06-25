import { createContext } from "react";
import { useState } from "react";
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
                let img = `${imgBase}/${i + 1}`;
                return { ...element, img };
            });
        setData(people);
        console.log(response);
        } catch (err) {
                console.error(err);
        }
    };
    

    return (
        <MyContext.Provider value={{data, setData, fetchData}}>
            {children}
        </MyContext.Provider>
    )
}

export default AppContext;