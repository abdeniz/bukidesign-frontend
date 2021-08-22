import React, { Fragment } from 'react'
import featuredImage from '../img/billboard.png'
import Services from '../components/services/Services'
import { breakpoints } from '../variables'
import styled from 'styled-components'
import IntroductionSection from '../components/IntroductionSection'
import ServicesInfo from '../components/ServicesSection'
import ContactSection from '../components/ContactSection'

const Home = () => {
  return (
    <Fragment>
      <IntroductionSection />

      <FeaturedImage src={featuredImage} />

      <ServicesInfo />

      <Services />

      <ContactSection />
    </Fragment>
  )
}

const FeaturedImage = styled.img`
  width: 100%;
  height: 500px;

  object-fit: cover;

  @media only screen and (min-width: ${breakpoints.tablet}px) {
    height: 350px;
  }
`

export default Home
