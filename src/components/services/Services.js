import React from 'react'
import styled from 'styled-components'
import Service from './Service'
import { breakpoints } from '../../variables'

const Services = () => {
  return (
    <ServicesWrapper>
      <Service />
      <Service />
      <Service />
      <Service />
    </ServicesWrapper>
  )
}

const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;

  box-shadow: 0 0 2rem 0 rgb(0 0 0 / 10%);

  @media only screen and (min-width: ${breakpoints.tablet}px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 8px;
  }
`

export default Services
