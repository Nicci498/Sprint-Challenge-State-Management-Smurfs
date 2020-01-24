import React, { useContext } from "react";
import SmurfContext from "../context/SmurfContext";
import SmurfCard from "./SmurfCard";

function SmurfList() {
  const { smurfs } = useContext(SmurfContext);
  return (
    <div className="List">
      {console.log(smurfs)}
      {smurfs.map(smurf => {
        return <SmurfCard key={smurf.id} smurf={smurf}></SmurfCard>;
      })}
    </div>
  );
}
export default SmurfList;