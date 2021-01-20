import React, { Component } from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import './avt.jpg'
import "./Menu.css";

const menus = [
  {
    name: 'Trang Chủ ',
    to : '/',
    exact: true,
  },{
    name: 'Quản lí Sản Phẩm',
    to : '/products',
    exact: false
  }
];
const MenuLink = ({label , to , activeOnlyWhenExact}) =>{
  return (
    <Route 
      path={to}
      exact={activeOnlyWhenExact}
      children={
        ({match}) => {
          var active = match ? 'active' : '';
          return (
            <li className={`nav-item  ${active}`}>
                <Link to={to} className="nav-link">{label}</Link>
              {/* <i className="las la-home" /> Home */}
          </li>
          )
        }
      }
    />
  );
}

class Menu extends Component {
  showMenu = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu,index) =>{
        return (
          <MenuLink 
            key={index}
            className="nav-link"
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        );
      })
      
    }
    return result
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
           {/* <img src="./avt.jpg" className="img-circle avarta" alt="ảnh Logo"></img> */}
           Shop-API
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {this.showMenu(menus)}

          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;
