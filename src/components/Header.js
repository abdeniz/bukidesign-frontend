import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import NavMobile from './NavMobile'
import useViewport from '../hooks/useViewport'
import logo from '../img/logo.svg'
import { breakpoints } from '../variables'
import { Link } from 'react-router-dom'

const Header = () => {
  const { width } = useViewport()

  return (
    <HeaderWrapper>
      <Link to='/'>
        <img src={logo} alt='logo' />
      </Link>
      {width > breakpoints.smallDesktop ? <Nav /> : <NavMobile />}
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  padding: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: ${breakpoints.smallDesktop}px) {
    padding: 32px 152px;
  }

  @media only screen and (min-width: ${breakpoints.largeDesktop}px) {
    padding: 32px 244px;
  }
`

export default Header
