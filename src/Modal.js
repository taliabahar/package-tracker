import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import mapboxgl from 'mapbox-gl';
import Mapbox from './MapboxGLMap';


// const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

// mapboxgl.accessToken = 'pk.eyJ1IjoidGFsaWFiYWhhciIsImEiOiJjazBpdDlvd3gwM2xwM2VzYm44amlzMW9yIn0.lmHtTTHzPH5uaejyDcn_1A';
// const map = new mapboxgl.Map({
// container: 'packageMap',
// style: 'mapbox://styles/mapbox/streets-v11'
// });

// make look like react hooks 
const Modal = ({ isShowing, hide, name, status, statusDetails }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
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
          Status: {status}
          </div>
          <div className="statusDetails">
          {statusDetails}
          </div>
          <div id="packageMap">
            <Mapbox></Mapbox>
          </div>
        </h1>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;