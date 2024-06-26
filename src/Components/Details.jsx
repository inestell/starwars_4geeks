import { useContext, useEffect} from 'react';
import { MyContext } from './Context';
import { useParams } from 'react-router-dom';

function Details () {
    const {data, fetchData} = useContext(MyContext);
    
    useEffect(() => {
        fetchData();
    }, []);

    const {index} = useParams();
    
    const thisPerson = data[index];

    return (
        <>
            <div className="p-3" style={{backgroundColor: "#fbb03b"}}>
                <h4 style={{fontSize: "40px"}}>{thisPerson.name}</h4>
            </div>
            <div className="row">
                <img className="col-6" src={thisPerson.img} />
                <div className="col-6">
                    <ul style={{listStyleType: "none"}}>
                        <li>Date of birth: {thisPerson.birth_year}</li>
                        <li>Planet of birth: </li>
                        <li>Gender: {thisPerson.gender}</li>
                        <li>Skin Color: {thisPerson.skin_color}</li>
                        <li>Eye Color: {thisPerson.eye_color}</li>
                        <li>Hair Color: {thisPerson.hair_color}</li>
                        <li>Height: {thisPerson.height}</li>
                        <li>Mass: {thisPerson.mass}</li>
                        <li>Films: </li>
                        <li>Starships: </li>
                        <li>Vehicles: </li>
                    </ul>
                </div>
            </div>
        </>
    )
};

export default Details;