import React, {useState, useEffect} from "react";
import removeIcon from './images/removeIcon.png'
import trackIcon from './images/tracking.png'
import Modal from "./Modal";
import useModal from './useModal';
import {trackPackage} from './shippoAPI'

export function Package(props) {
    const {isShowing, toggle} = useModal();
    const [carrier, setCarrier] = useState('');
    const [trackingNumber, setTrackingNumber] = useState('')
    const [trackingName, setTrackingName] = useState('')
    
    const [status, setStatus] = useState('');
    const [statusDetails, setStatusDetails] = useState('');
    const [statusIndicatorColor, setStatusIndicatorColor] = useState('');

    const isEnabled = trackingName.length > 0 && trackingNumber.length > 0 && carrier !== "";

    // where does this take in the tracking number and carrier 
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

    // function ani(){
    //     document.getElementById('plane').className ='animation';
    // }
    // function anitwo(){
    //     document.getElementById('bg').className ='animation2';
    // }

    return (
        <div className="packageInput">
            <div>
            <form>
                {/* need to allow for people to reset options */}
                <select className="carrierOptions" onChange={(e) => setCarrier(e.target.value) }>
                    <option value="" disabled selected>Select a Carrier</option>
                    <option value="usps">USPS</option> 
                    <option value="usp">UPS</option> 
                    <option value="fedex">FedEx</option> 
                </select>
                <input onChange={(e) => setTrackingNumber(e.target.value) } type="text" placeholder="Enter Package Tracking Number"></input>
                <input onChange={(e) => setTrackingName(e.target.value) } type="text" placeholder="Enter Package Name"></input>
            </form>
            </div>
            <Modal isShowing={isShowing} hide={toggle} name={trackingName}
              carrier={carrier} trackingNumber={trackingNumber}
              status={status} statusDetails={statusDetails} statusIndicatorColor={statusIndicatorColor}
            />
            <button disabled={!isEnabled} onClick={() => {grabData(); toggle();}} className="track"> Track <img src={trackIcon} width="20px" height="20px" alt="tracking icon"></img></button>     
            <button className="removeButton" onClick={() => props.deletePackage(props.index)}><img src={removeIcon}  width="7px" height="9px" alt="Remove Icon"></img><div id="buttonText">Remove Package</div></button>  
            
            {/* <div class="container">
			<button class="btn btn-inside btn-boarder"><img src={trackIcon} width="64px" height="64px" id="plane"></img></button>
			<div class="bg"><img src="https://i.cloudup.com/2ZAX3hVsBE-3000x3000.png" id="bg"></img></div>
			<div class="around around-boarder" onClick={() => {ani(); anitwo();}}></div>
		    </div> */}
        </div>   
    )
}