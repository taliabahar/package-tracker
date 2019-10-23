import React from "react";
import removeIcon from './images/removeIcon.png'

export function Package(props) {
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
            <button className="removeButton" onClick={() => props.deletePackage(props.index)}><img src={removeIcon}  width="10px" height="15px" alt="Remove Icon"></img><div id="buttonText">Remove Package</div></button>        </div>
        
    )
}