import React from "react";
import "./FavLocations/FavLocations.css"
import FavLocationsCard from "../components/FavLocations/FavLocationsCard";

class FavLocations extends React.Component {

  state = {
    FavLocationsDataCard: []
  }

  myDeleteHandler = (index) => {
    const DeleteDataHandler = [...this.state.FavLocationsDataCard.slice(0, index), ...this.state.FavLocationsDataCard.slice(index + 1)]
    this.setState({
      FavLocationsDataCard: DeleteDataHandler
    })
  }

  mySubmitHandler = (event) => {


    const API_KEY = "e085f0a0e00e60a9233fd954d14174fa";
    event.preventDefault();
    const getFavLocation = async () => {
      const city = event.target.city.value;
      const country = event.target.country.value;
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
      const data = await api_call.json();
      console.log(data);
      const UpdatedFavLocationsData = [...this.state.FavLocationsDataCard || []]
      console.log(UpdatedFavLocationsData)
      UpdatedFavLocationsData.push({
        temperature: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].main,
        icon: data.weather[0].icon,
        country: data.sys.country,
        city: data.name,
      }
      )
      console.log(UpdatedFavLocationsData)
      this.setState({
        FavLocationsDataCard: UpdatedFavLocationsData,
      })
    }
    getFavLocation();
  }

  cityChangeHandler = (event) => {
    this.setState({city: event.target.value})
  }

  countryChangeHandler = (event) => {
    this.setState({country: event.target.value})
  }

  render() {
  return (
  <div className="fav-location-container">
    <form className="form-container" onSubmit={this.mySubmitHandler}>
      <input className="forecast-input" onChange={this.cityChangeHandler} type="text" name="city" placeholder="City..." />
      <input className="forecast-input" onChange={this.countryChangeHandler} type="text" name="country" placeholder="Country..." />
      <button className="button-forecast" type="submit">Add location</button>
    </form>
    <FavLocationsCard myDeleteHandler = {this.myDeleteHandler} favLocations = {this.state.FavLocationsDataCard}/>
  </div>
  )
  }
  
}

export default FavLocations ;