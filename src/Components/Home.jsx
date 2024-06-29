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
    const { data, fetchData, favoritesReducer, favorites, dispatch, filteredCharacters, setFilteredCharacters, vehicles, fetchVehicles, planets, fetchPlanets } = useContext(MyContext);
    
    const [search, setSearch] = useState("");
    

    useEffect(() => {
        fetchData();
        fetchVehicles();
        fetchPlanets();
    }, []);

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
        const searchTerm = e.target.value;
        setSearch(searchTerm);
        
        const filteredData = data.filter(person =>
            person.name.toLowerCase().includes(e.target.value.toLowerCase())
        );

        if(e.target.value === "") {
            setFilteredCharacters(data)
        } else { 
            setFilteredCharacters(filteredData);}
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
                        onChange={(e) => handleSearch(e)}
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
                                    <Link style={{color: "black", textDecoration: "0"}} to={`/details/${indexOnData(item)}`}>
                                        {item.name}
                                    </Link>
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
                {vehicles && (vehicles.map((vehicle, index) => <CardVehicle  key={vehicle.name}
                                                    name={vehicle.name}
                                                    img={vehicle.img}
                                                    index={index}
                                                    onAdd={() => handleAdd(vehicle)}
                                                    onDelete={() => handleDelete(vehicle)}
                                                    />))}
                                                    
            </div>
        </div>
        <div>
            <h3>Planets</h3>
            <div className="cards-container mb-4 d-flex flex-row flex-nowrap overflow-x-auto">
                {planets && (planets.map((planet, index) => <CardPlanets  key={planet.name}
                                                    name={planet.name}
                                                    img={planet.img}
                                                    index={index}
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
//repetir para os planetas e naves