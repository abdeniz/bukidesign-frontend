import React from 'react'
import styled from 'styled-components'
import { colors, navList } from '../variables'
import Link from './Link'

const Modal = ({ setModalOpen }) => {
  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={() => setModalOpen(false)}>✕</CloseButton>
        <ListWrapper>
          {navList.map((listItem) => {
            return (
              <Link href='/'>
                <ListItem>{listItem}</ListItem>
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

  width: 340px;
  height: 100vh;

  background-color: ${colors.primary};
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