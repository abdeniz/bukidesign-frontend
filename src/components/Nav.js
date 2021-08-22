import React from 'react'
import styled from 'styled-components'
import { navList } from '../variables'
import Button from './Button'
import Link from './Link'

const Nav = () => {
  return (
    <nav>
      <ListWrapper>
        {navList.map((navItem, index) => {
          return (
            <Link href='/' key={index}>
              <ListItem>{navItem}</ListItem>
            </Link>
          )
        })}
        <ContactButton>Contact</ContactButton>
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
