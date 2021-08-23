import React from 'react'
import styled from 'styled-components'
import { breakpoints, colors } from '../variables'
import Link from './Link'
import data from '../data.json'

const Modal = ({ setModalOpen }) => {
  const navList = data.navigation

  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={() => setModalOpen(false)}>✕</CloseButton>
        <ListWrapper>
          {navList.map((navItem) => {
            return (
              <Link href={`/${navItem.url}`}>
                <ListItem>{navItem.name}</ListItem>
              </Link>
            )
          })}
          <Link href='/'>
            <ListItem>Contact</ListItem>
          </Link>
        </ListWrapper>
      </ModalContent>
    </ModalWrapper>
  )
}

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 100%;
  height: 100vh;

  background-color: ${colors.primary};

  @media only screen and (min-width: ${breakpoints.mobile}px) {
    width: 375px;
  }
`

const ModalContent = styled.div`
  position: relative;

  & * {
    color: ${colors.white};
  }
`

const CloseButton = styled.div`
  position: absolute;
  top: 32px;
  right: 32px;

  cursor: pointer;

  font-size: 28px;
  line-height: 28px;
`

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 36px;
`

const ListItem = styled.li`
  margin-bottom: 16px;
  display: inline-block;
`

export default Modal
