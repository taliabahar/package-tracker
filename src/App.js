import React, { useState, useEffect } from 'react';
import './App.css';
import {Package} from "./PackageInput";
import { apiHost } from './shippoAPI';
import box from './images/box2.png';



// import Modal from "./Modal";
// import useModal from './useModal';



function App() {
  useEffect(() => apiHost('https://api.goshippo.com/tracks/'))

  const [packages, setPackages] = useState([
    {
        carrier: "",
        trackingNum: "",
        trackingName: ""
    }
  ])
  const addPackage = (pkg) => {
    const newPackage = [pkg, ...packages];
    
    setPackages(newPackage);
  }

  const deletePackage = index => {
    const newPackages = [...packages];
    newPackages.splice(index, 1);
    setPackages(newPackages);
  }

  return (
    <div className = "app">
      <link href="https://fonts.googleapis.com/css?family=Barlow+Condensed|Lexend+Deca|Modak|News+Cycle|Nunito+Sans|Poppins|Quattrocento+Sans|Roboto+Condensed|Shrikhand&display=swap" rel="stylesheet"></link>
          <h1 id="header">Package Tracker</h1>
      <div className="add">
      <button className="addPackageButton" onClick={(e) => addPackage(e)}><img id="boxImage" src={box} alt="box" width="100px" height="100px"></img></button>
      </div>
      <div className = "todo-list">
        {packages.map((packages, index) => (
          <Package index={index} deletePackage={deletePackage} /> 
        ))}
      </div>
    </div>

  );
}

export default App;
