import React, { useState } from 'react';
import './App.css';
import {Package} from "./PackageInput";

// import Modal from "./Modal";
// import useModal from './useModal';


function App() {
  const [packages, setPackages] = useState([
    {
        carrier: "",
        trackingNum: "",
        trackingName: ""
    }
  ])
  console.log('packages state', packages)
  const addPackage = (pkg) => {
    const newPackage = [pkg, ...packages];
    
    setPackages(newPackage);
  }

  // const trackPackage = () => {

  // }

  const deletePackage = index => {
    const newPackages = [...packages];
    newPackages.splice(index, 1);
    setPackages(newPackages);
  }

  return (
    <div className = "app">
      <link href="https://fonts.googleapis.com/css?family=Barlow+Condensed|Lexend+Deca|Modak|News+Cycle|Nunito+Sans|Poppins|Quattrocento+Sans|Roboto+Condensed|Shrikhand&display=swap" rel="stylesheet"></link>
          <h1 id="header">Package Tracker</h1>
          <button className="addPackageButton" onClick={(e) => addPackage(e)}><div id="buttonTextAdd">Add Package</div></button>
      <div className = "todo-list">
        {packages.map((packages, index) => (
          <Package index={index} deletePackage={deletePackage} /> 
        ))}
      </div>
    </div>

  );
}

export default App;
