import React, { useState, useEffect } from "react";
import trackIcon from "./images/tracking.png";
import r3 from "./images/x-button.png";

import Modal from "./Modal";
import useModal from "./useModal";
import { trackPackage } from "./shippoAPI";
import { getTrackingStatus, postPackageWebhooks } from "./real-ShippoAPI";
import { getPackageCoordinates } from "./real-MapboxAPI";

export function Package(props) {
  const { carrier, trackingNum } = props.pkg;
  const { isShowing, toggle } = useModal();

  const [status, setStatus] = useState("");
  const [statusDetails, setStatusDetails] = useState("");
  const [statusIndicatorColor, setStatusIndicatorColor] = useState("");

  const [packageCity, setPackageCity] = useState("");
  const [packageCountry, setPackageCountry] = useState("");

  // const [center, setCenter] = useState([]);

  const isEnabled =
    props.pkg.trackingName && props.pkg.trackingNum && props.pkg.carrier;

  async function grabData() {
    await postPackageWebhooks(carrier, trackingNum); //post
    console.log("carrier", carrier);
    console.log("tracking num", trackingNum);
    const data = await getTrackingStatus(carrier, trackingNum); // real API
    // const data = await trackPackage(carrier, trackingNum);
    const currentTrackingHistoryItem =
      data.data[0].tracking_history[data.data[0].tracking_history.length - 1];
    setStatus(currentTrackingHistoryItem.status);
    setStatusDetails(currentTrackingHistoryItem.status_details);

    setPackageCity(currentTrackingHistoryItem.location.city);
    setPackageCountry(currentTrackingHistoryItem.location.country);

    // const locationData = await getPackageCoordinates(packageCity, packageCountry);
    // setCenter(data.features[0].geometry.coordinates);
  }

  useEffect(() => {
    statusIndicator();
  });

  function statusIndicator() {
    if (status === "DELIVERED") {
      setStatusIndicatorColor("positive");
    } else if (status === "TRANSIT") {
      setStatusIndicatorColor("active");
    } else if (status === "FAILURE") {
      setStatusIndicatorColor("negative");
    }
  }

  return (
    <div className="packageInput">
      <div>
        <form>
          <select
            id="carrierInput"
            className="carrierOptions"
            value={props.pkg.carrier}
            onChange={e => props.setCarrier(props.index, e.target.value)}
          >
            <option value="" disabled selected>
              Select a Carrier
            </option>
            <option value="usps">USPS</option>
            <option value="usp">UPS</option>
            <option value="fedex">FedEx</option>
          </select>
          <input
            id="trackingNumberInput"
            value={props.pkg.trackingNum}
            onChange={e => props.setTrackingNumber(props.index, e.target.value)}
            type="text"
            placeholder="Enter Package Tracking Number"
          ></input>
          <input
            id="trackingNameInput"
            value={props.pkg.trackingName}
            onChange={e => props.setTrackingName(props.index, e.target.value)}
            type="text"
            placeholder="Enter Package Name"
          ></input>
        </form>
      </div>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        name={props.pkg.trackingName}
        carrier={carrier}
        trackingNum={trackingNum}
        status={status}
        statusDetails={statusDetails}
        statusIndicatorColor={statusIndicatorColor}
        packageCity={packageCity}
        packageCountry={packageCountry}
        // center={center}
      />

      <button
        disabled={!isEnabled}
        onClick={() => {
          grabData();
          toggle();
        }}
        className="track"
      >
        {" "}
        Track{" "}
        <img
          src={trackIcon}
          width="20px"
          height="20px"
          alt="tracking icon"
        ></img>
      </button>
      <button
        className="removeButton"
        onClick={() => props.deletePackage(props.index)}
      >
        <img id="removeImg" src={r3} alt="Remove Icon"></img>
      </button>
    </div>
  );
}
