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
      <NavLink isCurrent={page === 'about'} id='about' to='/'>About</NavLink>
      <NavLink isCurrent={page === 'music'} id='music' to='/music/'>Music</NavLink>
      <NavLink isCurrent={page === 'sound'} id='soundDesign' to='/sound-design/'>Sound Design</NavLink>
      <a href='https://northeastern-ds-4200-f19.github.io/project-team-9-pedestrians/'
         target='_blank'
         rel='noopener noreferrer'>
        Data Viz
      </a>
      <NavLink isCurrent={page === 'contact'} to='/contact/'>Contact</NavLink>
    </ul>
    <hr/>
  </div>);

}
