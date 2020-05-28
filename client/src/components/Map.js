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
      <GoogleMap defaultZoom = {8} defaultCenter={{lat: 47.7511, lng: -120.7401}} >
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
        <div style={{height: '70vh', border:"2px solid lightgrey", borderRadius: "5px"}} >

          <WrappedMap 
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key="apikey-here"`}
          loadingElement={<div style={{height: "100%"}}/>}
          containerElement={<div style={{height: "100%"}}/>}
          mapElement={<div style={{height: "100%"}}/>}
          />
        </div>    
  
        <div className="text-center" style={{margin: "15px auto 5px auto"}}>
          <input type="radio" name="Category" value= "All" onChange = {(e) => {setFilter(e.target.value)}} style={{margin:"0px 5px"}}/>
          <label style={{margin:"0px 5px"}}>All</label>
          <input type="radio" name="Category" value= "minority-owned" onChange = {(e) => {setFilter(e.target.value)}} style={{margin:"0px 5px"}}/>
          <label style={{margin:"0px 5px"}}>Minority-owned</label>
          <input type="radio" name="Category" value= "veteran-owned" onChange = {(e) => {setFilter(e.target.value)}} style={{margin:"0px 5px"}}/>
          <label style={{margin:"0px 5px"}}>Veteran-owned</label>
          <input type="radio" name="Category" value= "women-owned" onChange = {(e) => {setFilter(e.target.value)}} style={{margin:"0px 5px"}}/>
          <label style={{margin:"0px 5px"}}>Women-owned</label>
          <label style={{margin:"0px 5px"}}>Location:</label>
          <div className="form-group" style={{display: "inline-block"}}>
            <input className="form-control" value = {cityFilter} onChange = {(e) => {setCityFilter(e.target.value)}} style={{margin:"0px 5px"}}/>
          </div>
          <button className="btn btn-sm btn-outline-dark" onClick={filterHandler} style={{marginLeft: "15px", verticalAlign:"middle"}}>Apply Filter</button>
        </div>
        <div className="row">
          <div className="col-12" style={{ minHeight: "100px", maxHeight: "500px", overflow: "auto"}}>
            <table className="table table-striped table-hover table-bordered table-sm" style={{border: "1px solid lightgrey", borderRadius: "5px"}}>
              <thead className="thead-dark">
                <tr>
                  <th>Name of Business</th>
                  <th>Category</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {loaded && currentBusinesses.map((business, idx) => (
                  <tr key={idx}>
                    <td>{business.nameOfFirm}</td>
                    <td>{business.category}</td>
                    <td>{business.address} {business.city} {business.zipCode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
}