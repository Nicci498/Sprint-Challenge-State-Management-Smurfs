import React, {useEffect, useState} from "react";
import "./App.css";
import SmurfContext  from "../context/SmurfContext";
import axios from "axios";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";

function App() {
  const [smurfs, setSmurfs] = useState([]);
  const addSmurf = newSmurf => {
    setSmurfs([...smurfs, newSmurf]);
  };
  useEffect(() => {
    axios
      .get(
        "http://localhost:3333/smurfs"
      )
      .then(res => setSmurfs(res.data))
      .catch(err => console.log(err));
  }, []);
    return (
      <SmurfContext.Provider value={{ addSmurf, smurfs }}>
        <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <SmurfList />
          <SmurfForm />
        </div>
      </SmurfContext.Provider>
    );
  
}

export default App;
