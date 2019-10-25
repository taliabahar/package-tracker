import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import Mapbox from './MapboxGLMap';
import 'status-indicator/styles.css';


// <status-indicator active pulse></status-indicator> 
// <status-indicator positive pulse></status-indicator>
// <status-indicator intermediary pulse></status-indicator>
// <status-indicator negative pulse></status-indicator>

// make look like react hooks 
const Modal = ({ isShowing, hide, name, status, statusDetails, statusIndicatorColor }) => isShowing ? ReactDOM.createPortal(
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
          Status: {status} <status-indicator width="100px" height="100px" {...statusIndicatorColor} pulse></status-indicator>
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