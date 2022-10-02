import React, {Components, useState} from 'react'
import { CSSTransition } from 'react-transition-group';

import './Dropdown.css'

export default function Dropdown(props) {
  return (
      <ul className = 'dropbar-drop'> { props.children }</ul>
  )
}

export function DropItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className='drop-item'>
        <a href='#' className='icon-button' onClick={() => setOpen(!open)}>{props.icon}</a>

      {open && props.children}
    </li>
  );
}

export function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');

  function DropdownItem(props) {
    return (
      <a href='#' className='drop-menu-item'>
        <span className='icon-button'> {props.leftIcon}</span>
        {props.children}

        <span className='icon-right'> { props.rightIcon } </span>
      </a>
    )
  }

  return (
    <div className='dropdown'>
      <CSSTransition in={activeMenu === 'main'} 
        unmountOnExit 
        timeout={500} 
        classNames= 'menu-primary'>
          <div className='menu'>
        
      <DropdownItem leftIcon={<i class="fa-brands fa-youtube"></i>}>My Profile</DropdownItem>
      <DropdownItem
        leftIcon={<i class="fa-solid fa-sliders"></i>}>
          Settings
      </DropdownItem>
      </div>
      </CSSTransition>
    </div>
  )
}