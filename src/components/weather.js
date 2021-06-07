import React from 'react';
import './weather.css';
import { Card, Image, Header, Table } from 'semantic-ui-react';
import moment from 'moment';

const CurrentWeatherCard = ({weatherData}) => (
  <Card>
    <Card.Content className="card-container">
        <Image src={`http://openweathermap.org/img/wn/${weatherData['weather'][0]["icon"]}@2x.png`} size='small'/>
        <Header style={{color: 'white'}} as='h1'>{weatherData.name}</Header>
        <p className="date">{moment().format('dddd')}, {moment().format('LL')}</p>
      <Table definition>
      <Table.Body>
        <Table.Row className="current-weather-data">
          <Table.Cell width={2}>Temperature</Table.Cell>
          <Table.Cell>{weatherData.main.temp} &deg;C</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Feels like</Table.Cell>
          <Table.Cell>{weatherData.main.feels_like} &deg;C</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Description</Table.Cell>
          <Table.Cell>{weatherData.weather[0].main}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Humidity</Table.Cell>
          <Table.Cell>{weatherData.main.humidity} %</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Sunrise</Table.Cell>
          <Table.Cell>{new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Sunset</Table.Cell>
          <Table.Cell>{new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</Table.Cell>
        </Table.Row>
      </Table.Body>
      </Table>
    </Card.Content>
  </Card>
)

export default CurrentWeatherCard ;
