import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import Mapbox from "./MapboxGLMap";
import "status-indicator/styles.css";
import { getPackageCoordinates } from "./MapboxForwardGeocodingAPI";

const Modal = ({
  isShowing,
  hide,
  name,
  status,
  statusDetails,
  statusIndicatorColor,
  packageCity,
  packageCountry
  // center
}) => {
  const variableAttribute = { [statusIndicatorColor]: statusIndicatorColor };
  const [center, setCenter] = useState([]);

  useEffect(() => {
    // const grabLocationData = async (packageCity, packageCountry) => {
    const grabLocationData = async () => {
      const data = await getPackageCoordinates();
      setCenter(data.features[0].geometry.coordinates);
    };
    grabLocationData();
  }, [isShowing]);

  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <link
            href="https://fonts.googleapis.com/css?family=Fira+Sans&display=swap"
            rel="stylesheet"
          ></link>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <h1>
                <div className="packageName">{name}</div>
                <div className="status">
                  Status: {status ? status : "loading..."}{" "}
                  <status-indicator
                    width="100px"
                    height="100px"
                    {...variableAttribute}
                    pulse
                  ></status-indicator>
                </div>
                <div className="statusDetails">{statusDetails}</div>
                <div id="packageMap">
                  <Mapbox center={center} />
                </div>
              </h1>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};

export default Modal;
