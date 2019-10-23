import React from "react";
import removeIcon from './images/removeIcon.png'
import trackIcon from './images/tracking.png'
import Modal from "./Modal";
import useModal from './useModal';


export function Package(props) {
    const {isShowing, toggle} = useModal();
    return (
        <div className="packageInput">
            <div>
            <form>
                {/* need to allow for people to reset options */}
                <select className="carrierOptions">
                    <option value="" disabled selected>Select a Carrier</option>
                    <option value="usps">USPS</option> 
                    <option value="usp">UPS</option> 
                    <option value="fedex">FedEx</option> 
                </select>
                <input type="text" placeholder="Enter Package Tracking Number"></input>
                <input type="text" placeholder="Enter Package Name"></input>
            </form>
            </div>
            <Modal isShowing={isShowing} hide={toggle}/>
            <button onClick={toggle} className="track"> Track <img src={trackIcon} width="20px" height="20px"></img></button>     
            <button className="removeButton" onClick={() => props.deletePackage(props.index)}><img src={removeIcon}  width="10px" height="15px" alt="Remove Icon"></img><div id="buttonText">Remove Package</div></button>  
        </div>
        
    )
}