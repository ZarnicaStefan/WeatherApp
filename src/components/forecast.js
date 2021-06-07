import React from "react";
import Form from "../components/Forecast/Form";
import ControlledCarousel from '../components/Forecast/ForecastWidget';
import '../components/Forecast/Form.css'

class Forecast extends React.Component {

  state = {
  FiveDaysForecast: [],
  }

  addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  getForecast = async (city, country) => {
    const API_KEY = "e085f0a0e00e60a9233fd954d14174fa";
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`)
    const data = await api_call.json();
    console.log(data);
    const fiveDays = []
    let currentDate = new Date()
    for (let i = 0; i < 5; ++i) {
      const todayForecast = data.list.filter((element) => new Date(element.dt_txt).getUTCDate() === this.addDays(currentDate, i).getUTCDate())
      fiveDays.push(todayForecast.map(
        (weatherForecast, index) => {
        return {
        key: index,
        temperature: weatherForecast.main.temp,
        city: data.city.name,
        country: data.city.country,
        humidity: weatherForecast.main.humidity,
        description: weatherForecast.weather[0].main,
        icon: weatherForecast.weather[0].icon,
        date: new Date(weatherForecast.dt_txt),
        }
       }
       ));
    }
    console.log(fiveDays)

    this.setState({
      FiveDaysForecast: fiveDays
    })
  }


  render() {
  return (
    <div className="forecast-container">
      <Form getForecast={this.getForecast}/>
      <div className="widget-container">
        <ControlledCarousel result={this.state.FiveDaysForecast}/>
      </div>
    </div>
  )
  }

  
}

export default Forecast ;


