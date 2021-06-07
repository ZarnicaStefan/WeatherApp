import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import { Button }  from "../Button";
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import '../Button.css';


class Navbar extends Component {
  state = { clicked: false }
  

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  handlelogout = () => {

  }

  render() {
    return(
        <nav className="NavbarItems">
        <h1 className="navbar-logo"><i className="fab fa-react"></i>WeatherApp</h1>
        <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <NavLink exact to={item.url} className={item.cName}>
                {item.title}
                </NavLink>
              </li>
            )
          })}
        </ul>
        <Button onClick={this.props.onClick} id="btn-show" className="btn-show">Log out</Button>
      </nav>
    )
  }
}

export default Navbar