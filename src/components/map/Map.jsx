import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

export default function Map({ onSelectLocation}) {
  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  const options = {
    mapId: '1446ad4bee2e22e7',
    mapTypeControl: false,
    zoomControl: false,
    fullscreenControl: false,
    clickableIcons: false,
    scrollwheel: true,
  };

  const defaultCenter = {
    lat: 12.9751503113215,
    lng: 77.5962120508646,
  };

  const [selectedLocation, setSelectedLocation] = useState(defaultCenter);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAyLWN0SvUpeNrKYDFbGGw853YKiNXfDYw', // Replace with your API key
  });

  const handleMarkerDragEnd = (e) => {
    const { latLng } = e;
    setSelectedLocation({
      lat: latLng.lat(),
      lng: latLng.lng(),
    });
  };

  const handleSelectLocation = () => {
    // Pass the selectedLocation to the parent component
    onSelectLocation(selectedLocation);
    // Close the map
    
  };

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultCenter}
        options={options}
        zoom={14}
      >
        {/* Draggable Marker */}
        <Marker
          position={selectedLocation}
          draggable={true}
          onDragEnd={handleMarkerDragEnd}
        />
      </GoogleMap>

      {/* Button to select the current location */}
      <button onClick={handleSelectLocation}>Select Location</button>
    </div>
  ) : null;
}
