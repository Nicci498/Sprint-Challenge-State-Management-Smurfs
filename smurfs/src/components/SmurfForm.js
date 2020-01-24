import React, {useContext, useState} from "react";
import SmurfContext from "../context/SmurfContext";

function SmurfForm() {
    const { addSmurf } = useContext(SmurfContext);
  
    const [newSmurf, setNewSmurf] = useState({
      name: "",
      age: "",
      height: "",
      id: NaN
    });
  
    const handleSubmit = event => {
      event.preventDefault();
      addSmurf(newSmurf);
    };
  
    const handleChanges = event => {
      const smurf = event.target.name;
      setNewSmurf({
        ...newSmurf,
        [smurf]: event.target.value,
        id: Date.now()
      });
    };
  
    return (
      <div>
        <form>
          <input
            name="name"
            type="text"
            placeholder="name"
            onChange={handleChanges}
          ></input> <br/>
          <input
            name="age"
            type="text"
            placeholder="age"
            onChange={handleChanges}
          ></input> <br/>
          <input
            name="height"
            type="text"
            placeholder="height"
            onChange={handleChanges}
          ></input> <br/>
          <button class="button" type="submit" onClick={handleSubmit}>
            Add Smurf
          </button>
        </form>
      </div>
    );
  }
  export default SmurfForm;