import React from 'react';
import pawprint from '../img/pawprint.png';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  return (
    <header>
      <div className='nav-wrap'>
        <img alt='pawprint' className='logo' src={pawprint} />
        <div className='header-text'>
          <h1>PET FOOD PANTRY</h1>
          <h2>Admin Panel</h2>
        </div>
        <nav>
          <NavLink
            className='decor'
            activeClassName='selected-nav'
            exact
            to='/'
            onClick={props.clearSearch}
          >
            View Inventory
          </NavLink>
          <NavLink
            className='decor'
            activeClassName='selected-nav'
            exact
            to='/add'
            onClick={props.clearSearch}
          >
            Add Inventory
          </NavLink>
          <a href='/' className='nodecoration'>
            <button className='logout' onClick={props.logOut}>
              Log Out
            </button>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
