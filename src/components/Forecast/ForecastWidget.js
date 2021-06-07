import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';


const ControlledCarousel = (props) => {

if (props.result.length === 0) {
  return null
} 

return (
<Carousel id='carousel-slide'>
  {props.result.map((forecast, index) => (
    <Carousel.Item key={index}>
    <img
      height="600"
      className="d-block w-100"
      src="https://images.all-free-download.com/images/graphiclarge/hd_sky_picture_01_hd_pictures_166302.jpg"
      alt={index}
    />
    <Carousel.Caption>
      <h3 className="weather-title">{forecast[0].city}, {forecast[0].country}</h3>
      <p>{forecast[0].date.getUTCDate()}/{forecast[0].date.getUTCMonth() + 1}/{forecast[0].date.getUTCFullYear()}</p>
      <img src={`http://openweathermap.org/img/wn/${forecast[0].icon}.png`} alt="icon"/>
      <p>Temperature: {forecast[0].temperature}°C</p>
      <p>Humidity: {forecast[0].humidity}%</p>
      <p>Description: {forecast[0].description}</p>
      <table className="forecast-table">
        <tbody className="forecast-table-body">
        {forecast.slice(1).map((futureForecast, index) => (
          <tr className="forecast-row" key={index}>
            <td className="forecast-data">{futureForecast.date.getUTCHours()}:00</td>
            <td className="forecast-data">
              <img src={`http://openweathermap.org/img/wn/${futureForecast.icon}.png`} alt="icon"/>
            </td>
            <td className="forecast-data">{futureForecast.temperature} °C</td>
            <td className="forecast-data">{futureForecast.humidity}%</td>
            <td className="forecast-data">{futureForecast.description}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </Carousel.Caption>
  </Carousel.Item>
  ))
  }
</Carousel>
)
}


export default ControlledCarousel;