import React, { useState } from 'react'
import styled from 'styled-components'
import useViewport from '../../hooks/useViewport'
import arrowIcon from '../../img/arrow_down.svg'
import { breakpoints, colors } from '../../variables'

const Service = ({ service }) => {
  const [open, setOpen] = useState(false)

  const { width } = useViewport()

  return (
    <ServiceWrapper onClick={() => setOpen(!open)}>
      <ServiceTitle>
        {service.title}
        {width < breakpoints.tablet && (
          <ArrowIcon src={arrowIcon} open={open} />
        )}
      </ServiceTitle>
      <ServiceDescription open={open} width={width}>
        {service.description}
      </ServiceDescription>
    </ServiceWrapper>
  )
}

const ServiceWrapper = styled.div`
  padding: 24px;
  background-color: ${colors.white2};

  border-bottom: solid 1px ${colors.gray2};

  @media only screen and (min-width: ${breakpoints.tablet}px) {
    padding: 44px;
    border-bottom: none;

    transition: background-color 0.2s;

    &:hover {
      background-color: ${colors.primary};

      & h5,
      p {
        color: ${colors.white};
      }
    }
  }
`

const ServiceTitle = styled.h5`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  transition: color 0.2s;
`

const ArrowIcon = styled.img`
  transform: ${(props) => (props.open ? 'rotate(180deg)' : 'rotate(0deg)')};
  height: 8px;
`

const ServiceDescription = styled.p`
  max-height: ${(props) =>
    props.open || props.width > breakpoints.tablet ? 300 : 0}px;

  opacity: ${(props) =>
    props.open || props.width > breakpoints.tablet ? 1 : 0};

  transition: opacity 0.2s, max-height 0.2s, margin 0.2s, color 0.2s;

  overflow: hidden;

  margin-top: ${(props) =>
    props.open || props.width > breakpoints.tablet ? 24 : 0}px;
`

export default Service
