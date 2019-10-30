import React, { useState, useEffect } from "react";
import "./App.css";
import { Package } from "./Package";
import { apiHost } from "./shippoAPI";
import box from "./images/boxGreen.png";

function App() {
  useEffect(() => apiHost("https://api.goshippo.com/tracks/"));

  const [packages, setPackages] = useState([
    {
      carrier: "",
      trackingNum: "",
      trackingName: ""
    }
  ]);

  const addPackage = pkg => {
    const newPackage = [...packages, { pkg }];
    setPackages(newPackage);
    // console.log("PACKAGES " + packages.carrier.value);
  };

  const deletePackage = index => {
    console.log("deleted index", index);
    const newPackages = [...packages];
    newPackages.splice(index, 1);
    setPackages(newPackages);
  };

  const setCarrier = (index, value) => {
    const updatedPackages = [...packages];
    updatedPackages[index].carrier = value;
    setPackages(updatedPackages);
    console.log("updated packages", packages);
  };

  const setTrackingNumber = (index, value) => {
    const updatedPackages = [...packages];
    updatedPackages[index].trackingNum = value;
    setPackages(updatedPackages);
    console.log("updated packages", packages);
  };

  const setTrackingName = (index, value) => {
    const updatedPackages = [...packages];
    updatedPackages[index].trackingName = value;
    setPackages(updatedPackages);
    console.log("updated packages", packages);
  };

  return (
    <div className="app">
      <link
        href="https://fonts.googleapis.com/css?family=Roboto+Condensed|Shrikhand&display=swap"
        rel="stylesheet"
      ></link>
      <h1 id="header">Package Tracker</h1>
      <div className="add">
        <button className="addPackageButton" onClick={e => addPackage(e)}>
          <img
            id="boxImage"
            src={box}
            alt="box"
            width="100px"
            height="100px"
          ></img>
        </button>
      </div>
      <div className="todo-list">
        {packages.map((pkg, index) => (
          <Package
            key={index}
            index={index}
            pkg={pkg}
            carrier={pkg.carrier}
            trackingNum={pkg.trackingNum}
            trackingName={pkg.trackingName}
            setTrackingNumber={setTrackingNumber}
            setTrackingName={setTrackingName}
            setCarrier={setCarrier}
            deletePackage={deletePackage}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
