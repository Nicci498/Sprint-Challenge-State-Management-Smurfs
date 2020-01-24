import React from "react";

function SmurfCard(props) {
  return (
    <div key={props.smurf.id} className="card">
        <h4>Name: {props.smurf.name} </h4> <br/>
        <p>Age: {props.smurf.age}</p> <br/>  
        <p>Height {props.smurf.height}</p>    
      
    </div>
  );
}
export default SmurfCard;