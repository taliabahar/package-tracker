import React, {useState, useEffect} from "react";
import removeIcon from './images/removeIcon.png'
import trackIcon from './images/tracking.png'

import r1 from './images/delete.png'
import r2 from './images/cross-remove-sign.png'
import r3 from './images/x-button.png'


import Modal from "./Modal";
import useModal from './useModal';
import {trackPackage} from './shippoAPI'

export function Package(props) {
    const {carrier, trackingNum, trackingName} = {props};
    const {isShowing, toggle} = useModal();
    
    const [status, setStatus] = useState('');
    const [statusDetails, setStatusDetails] = useState('');
    const [statusIndicatorColor, setStatusIndicatorColor] = useState('');

    // const isEnabled = trackingName.length > 0 && trackingNum.length > 0 && carrier.length > 0;
    const isEnabled = trackingName !== "" && trackingNum !== "" && carrier !== "";

    async function grabData() {
        const data = await trackPackage();
        const currentTrackingHistoryItem = data.data[0].tracking_history[data.data[0].tracking_history.length-1]
        setStatus(currentTrackingHistoryItem.status);
        setStatusDetails(currentTrackingHistoryItem.status_details);
    }

    useEffect(() => {
        statusIndicator();
    });

    // async function grabPackageData() {
    //     const data = await trackPackage();
    //     const currentTrackingLocation = data.data[0].tracking_history[data.data[0].tracking_history.length-1]
    //     setPackageCity(currentTrackingLocation.location.city);
    //     setPackageCountry(currentTrackingLocation.location.country);
    //   }
      
    //   async function grabLocationData() {
    //     const data = await getPackageCoordinates();
    //     setCenter(data.features[0].geometry.coordinates);
    //     console.log('HELLO', center)    
    //   }

    function statusIndicator() {
        if(status === "DELIVERED") {
            setStatusIndicatorColor("positive");
        } else if(status === "TRANSIT") {
            setStatusIndicatorColor("active");
        } else if(status === "FAILURE") {
            setStatusIndicatorColor("negative");
        } 
    }
    
    // onChange={(e) => setTrackingNumber(e.target.value) } 
    // onChange={(e) => setTrackingName(e.target.value) }
    // onChange={(e) => setCarrier(e.target.value) } 

    return (
        <div className="packageInput">
            <div>
            <form>
                <select className="carrierOptions" value={props.pkg.carrier} onChange={(e) => props.setCarrier(props.index, e.target.value) }>
                    <option value="" disabled selected>Select a Carrier</option>
                    <option value="usps">USPS</option> 
                    <option value="usp">UPS</option> 
                    <option value="fedex">FedEx</option> 
                </select>
                <input value={props.pkg.trackingNum} onChange={(e) => props.setTrackingNumber(props.index, e.target.value) } type="text" placeholder="Enter Package Tracking Number"></input>
                <input value={props.pkg.trackingName} onChange={(e) => props.setTrackingName(props.index, e.target.value) } type="text" placeholder="Enter Package Name"></input>
            </form>
            </div>
            <Modal isShowing={isShowing} hide={toggle} name={trackingName}
              carrier={carrier} trackingNum={trackingNum}
              status={status} statusDetails={statusDetails} statusIndicatorColor={statusIndicatorColor}
            />
            <button disabled={!isEnabled} onClick={() => {grabData(); toggle();}} className="track"> Track <img src={trackIcon} width="20px" height="20px" alt="tracking icon"></img></button>     
            <button className="removeButton" onClick={() => props.deletePackage(props.index)}><img id="removeImg" src={r3} alt="Remove Icon"></img></button>  
        </div>   
    )
}
