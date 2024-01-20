import React from 'react'
import { GoogleMap, useJsApiLoader,MarkerF } from '@react-google-maps/api';

export default function Map(props) {

    const containerStyle = {
        width: '100%',
        height: '100vh'
      };
      
      const opetion={
        mapId:"1446ad4bee2e22e7",
        mapTypeControl:false,
        zoomControl:false,
        fullscreenControl:false,
        clickableIcons:false,
        scrollwheel:true
      }
      
      const center = {
        lat: 12.9751503113215,
        lng: 77.5962120508646
      };
      
      const userLocations = [
        { id: 1, lat: 12.9751503113215, lng: 77.5962120508646, name: 'User 1' },
        { id: 2, lat: 12.965, lng: 77.586, name: 'User 2' },
        { id: 3, lat: 12.955, lng: 77.576, name: 'User 3' },
        // Add more users as needed
      ];
      const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAyLWN0SvUpeNrKYDFbGGw853YKiNXfDYw"
      })
    
  return isLoaded ?(
    <div>
       <GoogleMap mapContainerStyle={containerStyle} center={center} options={opetion}  zoom={14}>
        { /* Child components, such as markers, info windows, etc. */ }
        {userLocations.map((user,index) =>(
        <MarkerF key={index} position={{lat:user.lat, lng:user.lng}}/>
          ))}
        <></>
      </GoogleMap>
    </div>
  ):null;
}
