import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// import MapGL, {Marker} from 'react-map-gl';

// const markerList= [
//     {lat: 17.441013,
//     long: 78.391796,
//     name: "ABC Hospitals",
//     info: 10},
//     { lat:17.442889,
//     long: 78.396873,
//     name: "XYZ Hospitals",
//     info: 20},
//     {lat: 17.441681,
//     long: 78.394357,
//     name: "NRI Hospitals",
//     info: 10}
// ];

const styles = {
  width: "400px",
  height: "350px",
  margin: "0 auto"
};

const MapboxGLMap = ({ center }) => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoidGFsaWFiYWhhciIsImEiOiJjazBpdDlvd3gwM2xwM2VzYm44amlzMW9yIn0.lmHtTTHzPH5uaejyDcn_1A";
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: center,
        zoom: 6
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    // Status: {status ? status : "loading..."}{" "}

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map, center]);

  return <div ref={el => (mapContainer.current = el)} style={styles} />;
};

export default MapboxGLMap;
