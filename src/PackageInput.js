import React, {useState} from "react";
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
    
    console.log('tracking no:', trackingNumber)
    console.log('tracking name:', trackingName)
    console.log('carrier:', carrier)

    const [status, setStatus] = useState('');
    const [statusDetails, setStatusDetails] = useState('');

    function grabData() {
        const data = trackPackage();
        setStatus(data.status);
        setStatusDetails(data.status_details);

        console.log("STATUS:" + status);
        console.log("STATUS DETAIL:" + statusDetails);
    }

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
            <Modal isShowing={isShowing} hide={toggle} name={trackingName} carrier={carrier} trackingNumber={trackingNumber}/>
            {/* make tracking button disabled untill all 3 values are supplied */}
            {/* on click call api then set state - need to plan ahead - send info to modal passtracking data to Modal */}
            <button onClick={() => {toggle(); grabData();}} className="track"> Track <img src={trackIcon} width="20px" height="20px" alt="tracking icon"></img></button>     
            <button className="removeButton" onClick={() => props.deletePackage(props.index)}><img src={removeIcon}  width="7px" height="10px" alt="Remove Icon"></img><div id="buttonText">Remove Package</div></button>  
        </div>
        
    )
}