import React, { useState } from 'react'
import styled from 'styled-components'

const Service = () => {
  const [open, setOpen] = useState(false)

  return (
    <ServiceWrapper>
      <h5>Print</h5>
      <ServiceDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu lectus
        cursus erat viverra interdum. Sed accumsan risus felis, at euismod leo
        vestibulum vel.
      </ServiceDescription>
    </ServiceWrapper>
  )
}

const ServiceWrapper = styled.div``

const ServiceDescription = styled.p`
  max-height: 0px;
  margin: 0;
  opacity: 0;
  transition: opacity 0.2s, max-height 0.2s, margin 0.2s;
  overflow: hidden;
`

export default Service
