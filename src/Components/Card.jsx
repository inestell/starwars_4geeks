import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from './Context';



function Card (props) {
  const { favorites } = useContext(MyContext);

  let inFavorites = favorites.includes(props.person);

  return (
    <div className="card m-4 rounded-0" style={{width: "18rem", flex: "0 0 auto"}}>
      <img src={props.img} className="card-img-top" alt={props.name} />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        
        <p className="card-text">
          Gender: {props.gender}<br/>
          Hair Color: {props.hair}<br/>
          Eye Color: {props.eye}
        </p>
        
        <div className="buttons d-flex justify-content-between">
          <button className="btn btn-dark rounded-0 border-2" style={{backgroundColor: "#fbb03b"}}>
            <Link style={{color: "black", textDecoration: "0"}} to={`/details/${props.index}`}>MORE...</Link>
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

export default Card;