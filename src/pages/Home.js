import React, { Fragment } from 'react'
import Section from '../components/Section'
import Button from '../components/Button'
import featuredImage from '../img/billboard.png'
import Services from '../components/services/Services'
import { breakpoints } from '../variables'
import styled from 'styled-components'

const Home = () => {
  return (
    <Fragment>
      <Section>
        <h4>{'Design & print shop'}</h4>
        <h1>Print your ideas to life</h1>
        <h3>We design and print all your corporate needs</h3>
        <Button>Read more</Button>
      </Section>

      <FeaturedImage src={featuredImage} />

      <Section>
        <h4>{'Products & services'}</h4>
        <h1>Everything from 3D signs to business cards</h1>
        <h3>
          We can provide your business with many kinds of products and services
        </h3>
        <Button>Services</Button>
      </Section>

      <Services />

      <Section>
        <h4>Get in touch</h4>
        <h1>Let us provide your corporate needs</h1>
        <Button>Contact us</Button>
      </Section>
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
