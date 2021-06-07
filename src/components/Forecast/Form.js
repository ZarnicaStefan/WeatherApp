import React from 'react';
import '../Forecast/Form.css';

class Form extends React.Component {

  mySubmitHandler = (event) => {
    const city = event.target.city.value;
    const country = event.target.country.value;
    event.preventDefault();
    this.props.getForecast(city, country)
  }

  cityChangeHandler = (event) => {
    this.setState({city: event.target.value})
  }

  countryChangeHandler = (event) => {
    this.setState({country: event.target.value})
  }

    render(){
    return (
    <div className="fiveday-container">
    <div>
      <form className="form-container" onSubmit={this.mySubmitHandler}>
        <input className="forecast-input" onChange={this.cityChangeHandler} type="text" name="city" placeholder="City..." />
        <input className="forecast-input" onChange={this.countryChangeHandler} type="text" name="country" placeholder="Country..." />
        <button className="button-forecast" type="submit">Get Forecast</button>
      </form>
    </div>
    </div>
    )
    }
}

export default Form;