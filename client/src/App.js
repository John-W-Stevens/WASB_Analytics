import React, { useState } from 'react';
import "./bootstrap.css";
import { Router } from "@reach/router";
import Map from './components/Map';
import Cities from './components/Cities';
<<<<<<< Updated upstream
=======
import Header from "./components/Header"
import Footer from "./components/Footer"
import Data from "./components/Data"

>>>>>>> Stashed changes

function App() {
  const [cities, setCities] = useState();
  return (
    <div className="App">
          <h1 className="text-center" style={{marginTop: "200px"}}>MERN Boilerplate</h1>
          <Cities setCities={setCities} />
<<<<<<< Updated upstream
          <Map cities={cities}/>
=======
          <Map cities={cities} />
          <Data/>
          <Footer />
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
