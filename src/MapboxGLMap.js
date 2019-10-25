import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapGL, {Marker} from 'react-map-gl';

const markerList= [
    {lat: 17.441013, 
    long: 78.391796,
    name: "ABC Hospitals",
    info: 10},
    { lat:17.442889, 
    long: 78.396873,
    name: "XYZ Hospitals",
    info: 20},
    {lat: 17.441681, 
    long: 78.394357,
    name: "NRI Hospitals",
    info: 10}
];


const styles = {
  width: "400px",
  height: "350px",
  margin: "0 auto"
};

const MapboxGLMap = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  //take stuff from API and get longitude and lat from it and store it as array to put into center + add marker 
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoidGFsaWFiYWhhciIsImEiOiJjazBpdDlvd3gwM2xwM2VzYm44amlzMW9yIn0.lmHtTTHzPH5uaejyDcn_1A";
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", 
        // center: [0, 0],
        // longitude,latitude
        center: [-77.0364, 38.8951],
        zoom: 5
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={el => (mapContainer.current = el)} style={styles} />;
};

export default MapboxGLMap;
