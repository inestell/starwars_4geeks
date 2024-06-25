import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";


function Card (props) {
  return (
    <div className="card m-4 rounded-0" style={{width: "18rem"}}>
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
          Gender: {props.gender}<br/>
          Hair Color: {props.hair}<br/>
          Eye Color: {props.eye}
        </p>
        <div className="buttons d-flex justify-content-between">
          <button className="btn btn-dark rounded-0 border-2" style={{backgroundColor: "#fbb03b", color: "black"}}>MORE</button>
          <button className="btn btn-dark rounded-0 mx-0" style={{padding: "5px 15px 5px 15px", border: "solid 2px black"}}><FontAwesomeIcon icon={ faHeart } /></button>
        </div>
      </div>
    </div>
  )
};

export default Card;