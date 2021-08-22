import React from 'react'
import styled from 'styled-components'

const StaffCard = ({ img, name, title }) => {
  return (
    <StaffCardWrapper>
      <StaffImage src={img} />
      <h3>{name}</h3>
      <h4>{title}</h4>
    </StaffCardWrapper>
  )
}

const StaffCardWrapper = styled.div`
  padding: 4px;

  text-align: center;
  flex: 0 1 240px;
`

const StaffImage = styled.img`
  width: 240px;
  object-fit: cover;
  object-position: right;
`

export default StaffCard
