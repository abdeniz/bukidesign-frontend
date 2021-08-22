import React from 'react'
import StaffCard from './StaffCard'
import styled from 'styled-components'
import staff from './staff'
import { breakpoints } from '../../variables'

const StaffSection = () => {
  return (
    <StaffSectionWrapper>
      <StaffTitle>Staff</StaffTitle>
      <StaffList>
        {staff.map((member, index) => (
          <StaffCard
            key={index}
            img={member.img}
            name={member.name}
            title={member.title}
          />
        ))}
      </StaffList>
    </StaffSectionWrapper>
  )
}

const StaffSectionWrapper = styled.div`
  padding: 64px 0;
`

const StaffTitle = styled.h1`
  margin-bottom: 24px;
  text-align: center;
`

const StaffList = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;

  @media only screen and (min-width: ${breakpoints.mobile}px) {
    flex-direction: row;
  }
`

export default StaffSection
