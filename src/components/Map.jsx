import React from 'react'
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api'

const Map = ({data}) =>{

  const mapStyles = { //estilos del mapa
    height: "50vh",
    width: "100%"
  }

  const defaultCenter ={ //centro de donde se mostrara el mapa
    lat: data.lat,
    lng: data.lng
  }

  return(
    <LoadScript googleMapsApiKey='API_DE_LA_CONOSOLA_DE_MAPS'>
      <GoogleMap
      mapContainerStyle={mapStyles}
      zoom={9}
      center={defaultCenter}
      >
        {/* pasamos configuraciones como el zoom, estilo, y un punto central */}
      <Marker position={defaultCenter} /> 
      {/* marker es para presentar el punto en el mapa */}
      </GoogleMap>

    </LoadScript>
  )
}

export default Map;