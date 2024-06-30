import { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { MyContext } from "./Context";
import { faAddressCard, faListUl } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";

function DetailsVehicles () {
    const [dataV, setDataV] = useState([]);

    const { vehicles, fetchVehicles } = useContext(MyContext);

    const {index} = useParams();
    
    useEffect(() => {
        fetchVehicles();
        fetchV();
    }, []);
    
    const thisVehicle = vehicles[index];
    const URL = `https://www.swapi.tech/api/vehicles/${thisVehicle.uid}`
    

    const fetchV = async () => {
        try {
            let response = await axios.get(URL);
            let people = response.data.result.properties;
            setDataV(people);
        } catch (err) {
                console.error(err);
        }
    };


    return (
        <>
            <div className="row">
                <div className="col-6 p-5">
                    <h4 style={{fontSize: "80px", color: "#fbb03b", marginBottom: "50px"}}
                        className="divider">{thisVehicle.name}</h4>
                    <div>
                        <h6>
                            <span style={{padding: "8px", color: "#fbb03b"}}>
                                <FontAwesomeIcon icon={ faAddressCard } />
                            </span>
                            ID
                        </h6>
                        <ul className="mb-5">
                            <li>Model: {dataV.model}</li>
                            <li>Class: {dataV.vehicle_class}</li>
                            <li>Manufacturer: {dataV.manufacturer}</li>
                        </ul>
                        <h6>
                            <span style={{padding: "8px", color: "#fbb03b"}}>
                                <FontAwesomeIcon icon={ faListUl } />
                            </span>
                           Features
                        </h6>
                        <ul className="mb-5">
                            <li>Length: {dataV.length}</li>
                            <li>Cost in credits: {dataV.cost_in_credits}</li>
                            <li>Crew: {dataV.crew}</li>
                            <li>Passengers: {dataV.passengers}</li>
                            <li>Maximum speed: {dataV.max_atmosphering_speed}</li>
                            <li>Cargo capacity: {dataV.cargo_capacity}</li>
                            <li>Consumables: {dataV.consumables}</li>
                        </ul>
                    </div>
                </div>
                <img className="col-6" src={thisVehicle.img} />
            </div>
        </>
    )
};

export default DetailsVehicles;