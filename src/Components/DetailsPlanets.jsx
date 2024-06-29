import { useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { MyContext } from "./Context";
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DetailsPlanets () {
    
    const { planets, fetchPlanets } = useContext(MyContext);

    const {index} = useParams();
    
    useEffect(() => {
        fetchPlanets()
    }, []);
    
    const thisPlanet = planets[index];
    console.log(thisPlanet);

    return (
        <>
            <div className="row">
                <div className="col-6 p-5">
                    <h4 style={{fontSize: "80px", color: "#fbb03b", marginBottom: "50px"}}
                        className="divider">{thisPlanet.name}</h4>
                    <div>
                        <h6>
                            <span style={{padding: "8px", color: "#fbb03b"}}>
                                <FontAwesomeIcon icon={ faPerson } />
                            </span>
                            Birth
                        </h6>
                        <ul className="mb-5">
                            <li>Date of birth:</li>
                            <li>Planet of birth: </li>
                        </ul>
                    </div>
                </div>
                <img className="col-6" src={thisPlanet.img} />
            </div>
        </>
    )
};

export default DetailsPlanets;