import React, { Fragment } from 'react'
import Services from '../components/services/Services'
import { breakpoints, colors } from '../variables'
import styled from 'styled-components'
import IntroductionSection from '../components/IntroductionSection'
import ServicesInfo from '../components/ServicesSection'
import ContactSection from '../components/ContactSection'
import useFetch from '../hooks/useFetch'

const Home = () => {
  const { data, loading, error } = useFetch('/featured-image')

  const featuredImageUrl =
    data && process.env.REACT_APP_API_URL + data.image[0].url

  return (
    <Fragment>
      <IntroductionSection />

      {loading || error ? (
        <ImageSkeleton />
      ) : (
        <FeaturedImage src={featuredImageUrl} />
      )}

      <ServicesInfo />

      <Services />

      <ContactSection />
    </Fragment>
  )
}

const FeaturedImage = styled.img`
  width: 100%;
  height: 350px;

  object-fit: cover;

  @media only screen and (min-width: ${breakpoints.tablet}px) {
    height: 450px;
  }
`

const ImageSkeleton = styled.div`
  width: 100%;
  height: 500px;

  background-color: ${colors.gray};

  object-fit: cover;

  @media only screen and (min-width: ${breakpoints.tablet}px) {
    height: 350px;
  }
`

export default Home
