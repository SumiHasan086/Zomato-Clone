import React from 'react'
import './header.css'
import { FiSearch } from 'react-icons/fi';
import { BiMap } from 'react-icons/bi';
import { FaAngleDown } from 'react-icons/fa';


const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="header">
          <h1 className="header_logo">Zomato</h1>
          <div className="header_right">
            <div className="header_location_search_container">
              <div className="location_wrapper">
                <div className="location_icon_name">
                  < BiMap size={20} className="location_icon" />
                  <div className="">Dhaka, Bangladesh</div>
                </div>
                <i className="fi fi-rr-caret-down absolute_center"></i>
              </div>
              <div className="location_seperator"></div>
              <div className="header_searchbar">
                <FiSearch size={20} className="search_icon" />
                <input placeholder='Search for restaurant, cuisine or a dish' className="search_input" />
              </div>
            </div>
            
          </div>
          <div className="profile_wrapper">
              <img src="https://media.istockphoto.com/photos/two-coffee-mugs-on-a-yellow-background-picture-id1296807002?b=1&k=20&m=1296807002&s=170667a&w=0&h=NeR60a6js2E37EZNWSxrZgsgppH20arbfCHUxVrj8RM=" alt="Profile" className="header_profile_image" />
              <span className="header_username">Sumi</span>
              <FaAngleDown size={20} className="profile_options_icon" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header