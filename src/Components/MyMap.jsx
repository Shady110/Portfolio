import React, { useState } from "react";
import Map, { Marker } from "react-map-gl";

const MyMap = () => {
  const obourCityCoordinates = { latitude: 30.210494, longitude: 31.457195 }; // Obour City coordinates

  const [viewState, setViewState] = useState({
    ...obourCityCoordinates,
    zoom: 10,
  });


  const handleRecenter = () => {
    setViewState({
      ...obourCityCoordinates,
      zoom: 10, // Reset zoom level if needed
    });
  };

  return (
    <div className="relative w-full h-full">
      {/* Map Component */}
      <Map
        {...viewState}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={
          "pk.eyJ1Ijoic2hhZHlnYW1hbCIsImEiOiJjbTNzcndiZnUwMTNoMm5zNzZscTVueWxuIn0.FgIMIG4rKToHKLPY98s2oA"
        }
        onMove={(event) => setViewState(event.viewState)}
      ></Map>

      {/* Button to Re-center */}
      <button onClick={handleRecenter} className="stats p-3 rounded-xl absolute top-10 right-10"><i class="fa-solid fa-location-crosshairs"></i></button>
    </div>
  );
};

export default MyMap;
