import React from 'react'
import styled from 'styled-components'
import Service from './Service'
import { breakpoints, colors } from '../../variables'
import useFetch from '../../hooks/useFetch'

const Services = () => {
  const { data, loading, error } = useFetch('/services')

  if (loading || !data) {
    return (
      <ServicesWrapper>
        {Array(4)
          .fill()
          .map((skeleton, index) => {
            return (
              <SkeletonService key={index} className={skeleton}>
                <SkeletonTitle />
              </SkeletonService>
            )
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
  }
`

const SkeletonTitle = styled.div`
  height: 16px;
  width: 64px;
  background-color: ${colors.gray};
  border-radius: 8px;
`

export default Services
