import React from 'react'
import styled from 'styled-components'
import Service from './Service'
import { breakpoints, colors } from '../../variables'
import useFetch from '../../hooks/useFetch'

const Services = () => {
  const { data, loading, error } = useFetch('/services-collections')

  if (loading) {
    return (
      <ServicesWrapper>
        {Array(8)
          .fill()
          .map((skeleton, index) => {
            return <SkeletonService key={index} className={skeleton} />
          })}
      </ServicesWrapper>
    )
  }

  if (error) {
    return <p>Could not load services, try refreshing the page</p>
  }

  return (
    <ServicesWrapper>
      {data &&
        data.map((service) => {
          return <Service key={service.id} service={service} />
        })}
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

const SkeletonService = styled.div`
  height: 17px;

  padding: 24px;

  border-bottom: solid 1px ${colors.white};
  background-color: ${colors.gray2};

  @media only screen and (min-width: ${breakpoints.tablet}px) {
    padding: 44px;
    border-bottom: none;

    transition: background-color 0.2s;

    &:hover {
      background-color: ${colors.primary};
    }
  }
`

export default Services
