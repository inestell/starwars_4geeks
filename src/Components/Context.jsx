import { createContext, useEffect } from "react";
import { useState, useReducer } from "react";
import axios from "axios";

export const MyContext = createContext();

let url = "https://swapi.dev/api/people/?page=1";
let urlVehicles = "https://www.swapi.tech/api/vehicles";
let urlPlanets = "https://www.swapi.tech/api/planets";

let imgBase = "https://starwars-visualguide.com/assets/img/characters";
let imgVehicles = "https://starwars-visualguide.com/assets/img/vehicles";
let imgPlanets = "https://starwars-visualguide.com/assets/img/planets"

function AppContext ({children}) {
    const [data, setData] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [favorites, dispatch] = useReducer(favoritesReducer, JSON.parse(localStorage.getItem("favorites")) || []);
    
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    const [filteredVehicles, setFilteredVehicles] = useState([]);
    const [filteredPlanets, setFilteredPlanets] = useState([]);
    
    
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));

    }, [favorites]);

    useEffect(() => {
        fetchData();
        fetchVehicles();
        fetchPlanets();
    }, []);

    
    async function fetchData() {
        try {
            let response = await axios.get(url);
            let people = response.data.results.map((element, i) => {
                let img = `${imgBase}/${i + 1}.jpg`;
                return { ...element, img}});
            setData(people);
            setFilteredCharacters(people);
        } catch (err) {
                console.error(err);
        }
    };

    async function fetchVehicles() {
        try {
            let response = await axios.get(urlVehicles);
            let allVehicles = response.data.results.map((element, i) => {
                let img = `${imgVehicles}/${element.uid}.jpg`;
                return {...element, img}});
                
            setVehicles(allVehicles);
            setFilteredVehicles(allVehicles);
        } catch (err) {
            console.error(err);
        }
    };

    async function fetchPlanets() {
        try {
            let response = await axios.get(urlPlanets);
            let allPlanets = response.data.results.map((element, i) => {
                let img = `${imgPlanets}/${element.uid}.jpg`;
                return {...element, img}});
            setPlanets(allPlanets);
            setFilteredPlanets(allPlanets);
        } catch (err) {
            console.error(err);
        }
    };

    function favoritesReducer(favorites, action) {
        switch(action.type) {
            case "add": {
                const newFavorite = action.payload;
                return [
                    ...favorites, 
                    newFavorite
                ]
            }

            case "delete": {
                const filteredFavorites = favorites.filter(item => item.name !== action.payload.name);
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
                                    setFilteredCharacters,
                                    vehicles,
                                    fetchVehicles,
                                    planets,
                                    fetchPlanets, 
                                    filteredPlanets, 
                                    setFilteredPlanets, 
                                    filteredVehicles, 
                                    setFilteredVehicles}}>
            {children}
        </MyContext.Provider>
    )
}

export default AppContext;