import { useContext } from 'react';
import { MyContext } from './Context';
import { useParams } from 'react-router-dom';
import { faCakeCandles, faPerson, faFilm, faShuttleSpace, faVanShuttle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Details () {
    
    const { data } = useContext(MyContext);

    const {name} = useParams();

    const thisPerson = data.filter((person) => {
        return person.name === name})[0];

    return (
        <>
            <div className="row">
                <div className=" col-6 p-5">
                    <h4 style={{fontSize: "80px", color: "#fbb03b", marginBottom: "50px"}}
                        className="divider">{thisPerson.name}</h4>
                    <div>
                        <h6>
                            <span style={{padding: "8px", color: "#fbb03b"}}>
                                <FontAwesomeIcon icon={ faCakeCandles} />
                            </span>
                            Birth
                        </h6>
                        <ul className="mb-5">
                            <li>Date of birth: {thisPerson.birth_year}</li>
                            <li>Planet of birth: </li>
                        </ul>
                        <h6>
                            <span style={{padding: "8px", color: "#fbb03b"}}>
                                <FontAwesomeIcon icon={ faPerson } />
                            </span>
                            Personal
                        </h6>
                        <ul className="mb-5">
                            <li>Gender: {thisPerson.gender}</li>
                            <li>Skin Color: {thisPerson.skin_color}</li>
                            <li>Eye Color: {thisPerson.eye_color}</li>
                            <li>Hair Color: {thisPerson.hair_color}</li>
                            <li>Height: {thisPerson.height}</li>
                            <li>Mass: {thisPerson.mass}</li>
                        </ul>
                        <h6>
                            <span style={{padding: "8px", color: "#fbb03b"}}>
                                <FontAwesomeIcon icon={ faFilm} />
                            </span>
                            Films
                        </h6>
                        <ul className="mb-5">
                            <li> </li>
                        </ul>
                        <h6>
                            <span style={{padding: "8px", color: "#fbb03b"}}>
                                <FontAwesomeIcon icon={ faShuttleSpace} />
                            </span>
                            Starships
                        </h6>
                        <ul className="mb-5">
                            <li> </li>
                        </ul>
                        <h6>
                            <span style={{padding: "8px", color: "#fbb03b"}}>
                                <FontAwesomeIcon icon={ faVanShuttle} />
                            </span>
                            Vehicles
                        </h6>
                        <ul className="mb-5">
                            <li> </li>
                        </ul>
                    </div>
                </div>
                <img className="col-6" src={thisPerson.img} />
            </div>
        </>
    )
};

export default Details;