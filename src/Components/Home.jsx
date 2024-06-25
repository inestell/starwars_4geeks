import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Card from './Card';
import {useContext, useEffect} from 'react';
import { MyContext } from './Context';

function Home () {
    const { data, setData, fetchData } = useContext(MyContext);

    useEffect(() => {
        fetchData()
    }, []);

    return (
    <>
        <div>
            <h2>All about</h2>
            <h1>STAR WARS</h1>
        </div>
        <div className="navbar">
                <input type="text" placeholder="Search"></input>
                <button><FontAwesomeIcon icon={ faHeart } /></button>
        </div>
        <div>
            <h3>Characters</h3>
            <div className="cards-container mb-5 d-flex flex-row flex-wrap">
                {data.map((person, index) => <Card name={person.name} gender={person.gender} hair={person.hair_color} eye={person.eye_color} img={person.img}/>)}
            </div>
      </div>
    </>
 )
};

export default Home;