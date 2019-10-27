import React, { useEffect, useRef, useState } from "react";
import ReactDOM from 'react-dom';
import './Modal.css';
import Mapbox from './MapboxGLMap';
import 'status-indicator/styles.css';
import {trackPackage} from './shippoAPI'
import {getPackageCoordinates} from './MapboxForwardGeocodingAPI'
import { async } from "q";

// make look like react hooks 
const Modal = ({ isShowing, hide, name, status, statusDetails, statusIndicatorColor }) => {
  const variableAttribute = { [statusIndicatorColor]: statusIndicatorColor };
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);
  const [packageCity, setPackageCity] = useState('');
  const [packageCountry, setPackageCountry] = useState('');
  const [center, setCenter] = useState([]);
  // console.log('props center', center)
  async function grabPackageData() {
    const data = await trackPackage();
    const currentTrackingLocation = data.data[0].tracking_history[data.data[0].tracking_history.length-1]
    setPackageCity(currentTrackingLocation.location.city);
    setPackageCountry(currentTrackingLocation.location.country);
  }
  
  // async function grabLocationData() {
  //   const data = await getPackageCoordinates();
  //   setCenter(data.features[0].geometry.coordinates);
  //   console.log('HELLO', center)

  // }

  useEffect(() => {
    const grabLocationData = async () => {
      const data = await getPackageCoordinates();
      setCenter(data.features[0].geometry.coordinates);
    }
    grabLocationData();
  }, [isShowing])

  return isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <link href="https://fonts.googleapis.com/css?family=Fira+Sans|Josefin+Sans|Muli|Roboto+Condensed|Source+Sans+Pro|Staatliches|Ubuntu+Condensed&display=swap" rel="stylesheet"></link>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <h1>
          <div className="packageName">
          {name} 
          </div>
          <div className="status">
          {/* Status: {status} <status-indicator width="100px" height="100px" pulse></status-indicator> */}
          Status: {status} <status-indicator width="100px" height="100px" {...variableAttribute} pulse></status-indicator>
          </div>
          <div className="statusDetails">
          {statusDetails}
          </div>
          <div id="packageMap">
            <Mapbox center={center}/>
          </div>
        </h1>
      </div>
    </div>
  </React.Fragment>, document.body
) : null
};

export default Modal;