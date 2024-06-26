import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import Card from './Card';
import {useContext, useEffect, useReducer, useState} from 'react';
import { MyContext } from './Context';
import Dropdown from 'react-bootstrap/Dropdown';


function Home () {
    const { data, fetchData, favoritesReducer} = useContext(MyContext);
    const [favorites, dispatch] = useReducer(favoritesReducer, []);

    useEffect(() => {
        fetchData()
    }, []);

    function handleAdd( person ) {
        dispatch({
            type: "add",
            payload: person
        });
    };

    function handleDelete( index ) {
        dispatch({
            type: "delete", 
            id: index
        });
    };


    console.log(data);

    return (
    <>
        <div>
            <h2>All about</h2>
            <h1>STAR WARS</h1>
        </div>
        <div className="navbar">
                <input type="text" 
                        placeholder="Search"></input>
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
                                            onClick={handleDelete}>
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
            <div className="cards-container mb-5 d-flex flex-row flex-nowrap overflow-x-auto">
                {data.map((person, index) => <Card key={person.name} 
                                                    name={person.name} 
                                                    gender={person.gender} 
                                                    hair={person.hair_color} 
                                                    eye={person.eye_color} 
                                                    img={person.img}
                                                    index={index}
                                                    onClick={() => handleAdd(person)}
                                                    />)}
                                                    
            </div>
        </div>
        <footer>--- May the force be with you ---</footer>
    </>
 )
};

export default Home;