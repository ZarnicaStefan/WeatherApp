import React, { useEffect, useState } from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom';
import { Dimmer, Loader } from 'semantic-ui-react';
import CurrentWeatherCard from "./components/weather";
import Forecast  from "./components/forecast";
import FavLocations from "./components/FavLocations";
import {useAuth} from './components/contexts/AuthContext';
import LogIn from "./components/Auth/login";
import SignUp from './components/Auth/signup';
import PrivateRoute from './components/Auth/PrivateRoutes';

export default function App() {

  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [data, setData] = useState([]);
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      }
  
    fetchData();
  }, [lat, long])


  useEffect(() => {
    const fetchApi = async () => {
    if (lat && long != null) {
     await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${`0bf39e248be47235803ddf5257f5753d`}`)
      .then(res =>res.json() )   
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    }
    fetchApi();
  }, [lat, long])

  const { logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError('')
    
    try {
      await logout()
      history.push('/login')
    } catch {
      setError('Failed to log out')
    }
  }

  return (
    
    <div className="App">
    <Router>
      <Navbar onClick={handleLogout} />
      <Switch>
            <PrivateRoute exact path="/" component={() => 
              (typeof data.main != 'undefined') ? (
              <CurrentWeatherCard weatherData={data}/>
              ): (
              <div>
              <Dimmer active>
                 <Loader>Loading...</Loader>
              </Dimmer>
              </div>
              )
            } />
            <PrivateRoute exact path="/forecast" component={Forecast} />
            <PrivateRoute exact path="/FavLocations" component={FavLocations} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={LogIn} />
      </Switch>
    </Router>
    </div>
  );
}




