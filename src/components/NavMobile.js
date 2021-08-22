import React, { useState } from 'react'
import styled from 'styled-components'
import burger from '../img/burger.svg'
import Modal from './Modal'

const NavMobile = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <nav>
      <BurgerMenu src={burger} alt='menu' onClick={() => setModalOpen(true)} />
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
    </nav>
  )
}

const BurgerMenu = styled.img`
  cursor: pointer;
`

export default NavMobile
