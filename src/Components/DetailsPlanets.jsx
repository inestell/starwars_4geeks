import { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { MyContext } from "./Context";
import { faPerson, faListUl } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";

function DetailsPlanets () {
    const [dataP, setDataP] = useState([]);

    const { planets, fetchPlanets } = useContext(MyContext);

    const {index} = useParams();
    
    useEffect(() => {
        fetchPlanets()
        fetchP();
    }, []);

    const thisPlanet = planets[index];
    const URL = thisPlanet.url
    
    const fetchP = async () => {
        try {
            let response = await axios.get(URL);
            let thePlanet = response.data.result.properties;
            setDataP(thePlanet);
        } catch (err) {
                console.error(err);
        }
    };
    
    console.log(dataP);

    return (
        <>
            <div className="row">
                <div className="col-6 p-5">
                    <h4 style={{fontSize: "80px", color: "#fbb03b", marginBottom: "50px"}}
                        className="divider">{thisPlanet.name}</h4>
                    <div>
                        <h6>
                            <span style={{padding: "8px", color: "#fbb03b"}}>
                                <FontAwesomeIcon icon={ faListUl } />
                            </span>
                            Features
                        </h6>
                        <ul className="mb-5">
                            <li>Diameter: {dataP.diameter}</li>
                            <li>Gravity: {dataP.gravity}</li>
                            <br />
                            <li>Rotation period: {dataP.rotation_period}</li>
                            <li>Orbital period: {dataP.orbital_period}</li>
                            <br />
                            <li>Terrain: {dataP.terrain}</li>
                            <li>Surface water: {dataP.surface_water}</li>
                            <li>Climate: {dataP.climate}</li>
                            <li>Population: {dataP.population}</li>
                            
                        </ul>
                    </div>
                </div>
                <img className="col-6" src={thisPlanet.img} />
            </div>
        </>
    )
};

export default DetailsPlanets;