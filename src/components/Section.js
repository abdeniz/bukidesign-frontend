import styled from 'styled-components'
import { breakpoints } from '../variables'

const Section = ({ children }) => {
  return (
    <SectionWrapper>
      {children &&
        children.map((child) => {
          return child
        })}
    </SectionWrapper>
  )
}

const SectionWrapper = styled.div`
  margin: 128px 0;

  & * {
    margin: 8px 0;
  }

  @media only screen and (min-width: ${breakpoints.tablet}px) {
    margin: 98px;
  }

  @media only screen and (min-width: ${breakpoints.largeDesktop}px) {
    margin: 128px;
  }
`

export default Section
