import React from 'react'
import { Link } from 'gatsby'
import navLinkStyle from './navLink.module.css'
import LayoutStyle from './layout.module.css'

const NavLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
);



export default NavLink;