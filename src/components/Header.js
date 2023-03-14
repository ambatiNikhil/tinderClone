import React from 'react'
import './Header.css'
import IconButton from '@material-ui/core/IconButton'
import PersonIcon from '@material-ui/icons/Person'
// import ForumIcon from '@material-ui/icons/Forum'
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'> 
     <IconButton>
        <PersonIcon fontSize='large' className='header__icon'/>
     </IconButton>
     <img src='https://www.sierraexperts.com/documents/2022/01/tinder-logo.png' className='imageSize' alt="headerLogo" />
     <IconButton>
     <Link to="/"><HomeIcon fontSize='large' className='header__icon'/> </Link>
     </IconButton>
     
    </div>
  )
}

export default Header