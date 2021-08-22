import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import NavMobile from './NavMobile'
import useViewport from '../hooks/useViewport'

const Header = () => {
  const { width } = useViewport()

  return (
    <HeaderWrapper>
      <div>Logo</div>
      {width > 1200 ? <Nav /> : <NavMobile />}
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  padding: 40px 160px;
`

export default Header
