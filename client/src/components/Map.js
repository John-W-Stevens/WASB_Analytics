import React, { useState, setState, useEffect } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, Circle } from "react-google-maps";
import axios from 'axios';

export default ({cities}) =>{

    const [businesses, setBusinesses] = useState();
    const [filter, setFilter] = useState('');
    const [cityFilter, setCityFilter] = useState('');
    const [currentBusinesses, setCurrentBusinesses] = useState();
    const [loaded, setLoaded] = useState(false);
  
    // This section does not seem to call additional API calls for more markers. I checked how many requests had been made using the API key both before and after refreshing with a list of 10 markers at different locations and the number only increased by 2. Once we have lat and long on our objects, this next section should be able to display pins in our map based off of what we filtered our data by.
    function Map() {
      return(
      // Washington state
      // Currently showing all cities in Washington as a 5000 radius black circle
      <GoogleMap defaultZoom = {8} defaultCenter={{lat: 47.7511, lng: -120.7401}}>
        {loaded && cities.map(city => (
          <Circle center={{lat: parseFloat(city.lat), lng: parseFloat(city.long)}} radius={5000} />
        ))}
      </GoogleMap>)
    }
  
    useEffect(() =>{
      axios.get("http://localhost:8000/api/businesses")
        .then(res=>{
          setBusinesses(res.data.Businesses);
          setCurrentBusinesses(res.data.Businesses);
          setLoaded(true);
        })
    }, [])

    const WrappedMap = withScriptjs(withGoogleMap(Map));
  
    const filterHandler = e =>{
      e.preventDefault();
      setCurrentBusinesses(businesses.filter(business => business.category === filter).filter(business => business.city.toLowerCase() === cityFilter.toLowerCase()))
    }

    return (
      <div>
        <div style={{width: '80vw', height: '70vh'}}>
          <WrappedMap 
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${'Put Key Here'}`}
          loadingElement={<div style={{height: "100%"}}/>}
          containerElement={<div style={{height: "100%"}}/>}
          mapElement={<div style={{height: "100%"}}/>}
          />
        </div>    
  
        <div>
          <label>Set Filter for business category</label>
          <input value = {filter} onChange = {(e) => {setFilter(e.target.value)}} />
          <label>Set Filter for City</label>
          <input value = {cityFilter} onChange = {(e) => {setCityFilter(e.target.value)}} />
          <button onClick={filterHandler} >Apply Filter</button>
          <div>
            <p>Businesses owned by: {filter} in {cityFilter}</p>
            {loaded && currentBusinesses.map((business, idx) => (
              <p key={idx}>Business: {business.nameOfFirm} City: {business.city}</p>
            ))}
          </div>
        </div>
      </div>
    );
}