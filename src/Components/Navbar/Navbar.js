import React, { Component } from 'react';
import {MenuItems} from './MenuItems'

import Dropdown, { DropdownMenu, DropItem } from './Dropdown.js';
import './Navbar.css'

class Navbar extends Component {

    state = { clicked: false }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render () {
        return (
            <nav className = 'NavbarItems'>
                <h1 className='navbar-logo'>React<i className='fab fa-react'></i></h1>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className ={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                            <a className={item.cName} href={item.url}>{item.title}</a></li>
                        )
                    })}
                </ul>
                <Dropdown>
                    <DropItem icon= {<i class="fa-brands fa-youtube"></i>} />
                    <DropItem icon= {<i class="fa-brands fa-twitter"></i>} />
                    <DropItem icon= {<i class="fa-brands fa-instagram"></i>} />

                    <DropItem icon= {<i class="fa-solid fa-user"></i>}>
                    <DropdownMenu></DropdownMenu>
                    </DropItem>
                </Dropdown>
            </nav>
        )
    }
}

export default Navbar
