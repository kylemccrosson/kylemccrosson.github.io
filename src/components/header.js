import React from 'react'
import {Link} from 'gatsby'
import NavLink from './navLink'
import headerStyles from './header.module.css'
import LayoutStyle from './layout.module.css'

export default ({page}) => {

  return (<div>
    <Link to='/'>
      <img src={require('../images/profile_pic.png')}
           alt='icon image'/>
    </Link>

    <h1>Kyle McCrosson</h1>
    <ul>
      <NavLink id='about' to='/'>About</NavLink>
      <NavLink id='music' to='/music/'>Music</NavLink>
      <NavLink id='soundDesign' to='/sound-design/'>Sound Design</NavLink>
      <a href='https://northeastern-ds-4200-f19.github.io/project-team-9-pedestrians/'
         target='_blank'
         rel='noopener noreferrer'>
        Data Viz
      </a>
      <NavLink to='/contact/'>Contact</NavLink>
    </ul>
    <hr/>
  </div>);

}
