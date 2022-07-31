import React from 'react'
import SVLogo from '../assets/images/SVLogo.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { MdMenu } from 'react-icons/md';
import circle from '../assets/images/plain header.png'
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../features/user/userSlice';

const Navbar = () => {
  // const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const toggle = () => {
    dispatch(toggleSidebar())
  }
  return (
    <NavContainer className='nav_border'>

      <div className='menu_logo'>
        <button type='button' className='toggle_btn' onClick={toggle}>
            <MdMenu/>
        </button>
        
        <Link to='/'>
          <img src={SVLogo} alt='scout vendor' className='svlogo' />
        </Link>
      </div>

      <img src={circle} alt="circle" />
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px 64px;


  .menu_logo {
    display: flex;
    justify-content: center;
    align-items: baseline;
    margin-top: 22px;

    .toggle_btn {
      font-size: 44px;
      margin-right: 28px;
      color: var(--clr-primaryOrange);
    }
    
  }
  
`

export default Navbar