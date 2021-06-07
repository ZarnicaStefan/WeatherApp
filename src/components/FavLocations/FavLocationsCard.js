import React from 'react';

const FavLocationsCard = (props) => {

  if (props.favLocations.length === 0) {
    return null
  } 

  return (
  <div>
  {props.favLocations.map((favData, index) => (
      <div className="FavLocationsCardContainer">
      <div onClick={ () => props.myDeleteHandler(index)} key={index} className="FavLocationsCard">
        <div className="FavLocationIcon">
          <img src={`http://openweathermap.org/img/wn/${favData.icon}@2x.png`} alt="fav-icon" />
        </div>
        <div className="FavLocationsInfo">
          <h3 className="FavLocationParagraphTitle">{favData.city}, {favData.country}</h3>
          <p className="FavLocationParagraph">Temperature: {favData.temperature} °C</p>
          <p className="FavLocationParagraph">Humidity: {favData.humidity}%</p>
          <p className="FavLocationParagraph">Description: {favData.description}</p>
        </div>
      </div>
  </div>
  ))
  }
  </div>
  )
}

export default FavLocationsCard