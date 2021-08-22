import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Link from './Link'
import data from '../data.json'

const Nav = () => {
  const navList = data.navigation

  return (
    <nav>
      <ListWrapper>
        {navList.map((navItem, index) => {
          return (
            <Link href={`/${navItem.url}`} key={index}>
              <ListItem>{navItem.name}</ListItem>
            </Link>
          )
        })}
        <ContactButton href='/contact'>Contact</ContactButton>
      </ListWrapper>
    </nav>
  )
}

const ListWrapper = styled.ul`
  display: flex;
  align-items: center;
`

const ListItem = styled.li`
  margin-left: 24px;
`

const ContactButton = styled(Button)`
  margin-left: 24px;
`

export default Nav
