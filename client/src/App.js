import React, { useState } from 'react';
import "./bootstrap.css";
import { Router } from "@reach/router";
import Map from './components/Map';
import Cities from './components/Cities';
import Header from "./components/Header"
import Footer from "./components/Footer"


function App() {
  const [cities, setCities] = useState();
  return (
    <div className="App container">
          <Header />
          <Cities setCities={setCities} />
          <Map cities={cities} />
          <Footer />
    </div>
  );
}

export default App;
