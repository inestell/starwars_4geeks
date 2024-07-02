import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { MyContext } from './Context';
import { useContext } from 'react';

function CardPlanets(props) {
    const { favorites } = useContext(MyContext);

    let inFavorites = favorites.includes(props.planet);

    return(
        <div className="card m-4 rounded-0" style={{width: "18rem", flex: "0 0 auto"}}>
            <img src={props.img} className="card-img-top" alt={props.name} />
            <div className="card-body">
                <h5 className="card-title" style={{height: "40px"}}>{props.name}</h5>
        
                
                <div className="buttons d-flex justify-content-between align-self-end">
                    <button className="btn btn-dark rounded-0 border-2" style={{backgroundColor: "#fbb03b"}}>
                        <Link style={{color: "black", textDecoration: "0"}} to={`/detailsPlanets/${props.name}`}>MORE...</Link>
                    </button>
                    <button className={inFavorites ? "btn btn-danger rounded-0 mx-0" : "btn btn-dark rounded-0 mx-0 favorite"}
                            style={{padding: "5px 15px 5px 15px", border: "solid 2px black"}}
                            onClick={inFavorites ? props.onDelete : props.onAdd}
                            >
                        <FontAwesomeIcon icon={ faHeart } />
                    </button>
                </div>
            </div>
        </div>
    )
};

export default CardPlanets;