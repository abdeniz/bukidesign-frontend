import React from 'react'
import styled from 'styled-components'
import Service from './Service'

const Services = () => {
  return (
    <ServicesWrapper>
      <Service></Service>
    </ServicesWrapper>
  )
}

const ServicesWrapper = styled.div`
  display: flex;
`

export default Services
