import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import Card from './Card';
import CardVehicle from './CardVehicle';
import CardPlanets from './CardPlanets';
import {useContext, useEffect, useState} from 'react';
import { MyContext } from './Context';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';


function Home () {
    const { data, fetchData, favoritesReducer, favorites, dispatch, filteredCharacters, setFilteredCharacters, vehicles, fetchVehicles, planets, fetchPlanets, filteredVehicles, setFilteredVehicles, filteredPlanets, setFilteredPlanets } = useContext(MyContext);
    
    const [search, setSearch] = useState("");
    

    

    function handleAdd( person ) {
        dispatch({
            type: "add",
            payload: person
        });
    };

    function handleDelete( person ) {
        dispatch({
            type: "delete", 
            payload: person
        });
        localStorage.setItem("favorites", JSON.stringify(favorites.filter(item => item.name !== person.name)));
    };

    function indexOnData(person) {
        let index = data.indexOf(person);
        return index;
    };

    favorites.map(item => console.log(indexOnData(item)));
    
    const handleSearch = (e) => {
        setSearch(e.target.value);
        const filteredData = data.filter(person =>
            person.name.toLowerCase().includes(e.target.value.toLowerCase()));
        e.target.value === "" ? setFilteredCharacters(data) : setFilteredCharacters(filteredData);
    };

    const handleVSearch = (e) => {
        setSearch(e.target.value);
        const filteredData = vehicles.filter(vehicle =>
            vehicle.name.toLowerCase().includes(e.target.value.toLowerCase()));
        e.target.value === "" ? setFilteredVehicles(vehicles) : setFilteredVehicles(filteredData);
    };

    const handlePSearch = (e) => {
        setSearch(e.target.value);
        const filteredData = planets.filter(planet =>
            planet.name.toLowerCase().includes(e.target.value.toLowerCase()));
        e.target.value === "" ? setFilteredPlanets(planets) : setFilteredPlanets(filteredData);
    };
    

    return (
    <div className="cont stars">
        <div className="header">
            <h2>All about</h2>
            <h1>STAR WARS</h1>
        </div>
        <div className="navbar">
                <input type="text"
                        value={search}
                        onChange={(e) => {handleSearch(e); handlePSearch(e); handleVSearch(e)}}
                        placeholder="Search">
                </input>
                <Dropdown>
                    <Dropdown.Toggle variant="dark" 
                                        style={{padding: "10px 20px", borderRadius: "0"}}>
                        <FontAwesomeIcon icon={ faHeart } />
                    </Dropdown.Toggle>
                    {favorites.length >= 1 && (
                        <Dropdown.Menu>
                            {favorites.map((item, index) => (
                                <Dropdown.Item key={index}>
                                    {item.name}
                                    <span className="float-end"
                                            onClick={() => handleDelete(item)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </span>

                                </Dropdown.Item>
                            ))
                            }
                        </Dropdown.Menu>
                    )}
                </Dropdown>
        </div>
        <div>
            <h3>Characters</h3>
            <div className="cards-container mb-4 d-flex flex-row flex-nowrap overflow-x-auto">
                {filteredCharacters && (filteredCharacters.map((person, index) => <Card key={person.name} 
                                                    name={person.name}
                                                    uid={person.uid}
                                                    gender={person.gender} 
                                                    hair={person.hair_color} 
                                                    eye={person.eye_color} 
                                                    img={person.img}
                                                    index={index}
                                                    person={person}
                                                    onAdd={() => handleAdd(person)}
                                                    onDelete={() => handleDelete(person)}
                                                
                                                    />))}
                                                    
            </div>
        </div>
        <div>
            <h3>Vehicles</h3>
            <div className="cards-container mb-4 d-flex flex-row flex-nowrap overflow-x-auto">
                {filteredVehicles && (filteredVehicles.map((vehicle, index) => <CardVehicle  key={vehicle.name}
                                                    name={vehicle.name}
                                                    img={vehicle.img}
                                                    uid={vehicle.uid}
                                                    index={index}
                                                    vehicle={vehicle}
                                                    onAdd={() => handleAdd(vehicle)}
                                                    onDelete={() => handleDelete(vehicle)}
                                                    />))}
                                                    
            </div>
        </div>
        <div>
            <h3>Planets</h3>
            <div className="cards-container mb-4 d-flex flex-row flex-nowrap overflow-x-auto">
                {filteredPlanets && (filteredPlanets.map((planet, index) => <CardPlanets  key={planet.name}
                                                    name={planet.name}
                                                    img={planet.img}
                                                    uid={planet.uid}
                                                    index={index}
                                                    planet={planet}
                                                    onAdd={() => handleAdd(planet)}
                                                    onDelete={() => handleDelete(planet)}
                                                    />))}
                                                    
            </div>
        </div>
        <footer>--- May the force be with you ---</footer>
        
    </div>
 )
};

export default Home;


//link do dropdown para details
//renderizar só depois de receber fetch
//formatar as imagens dos detalhes