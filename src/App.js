import Header from './components/Header'
import styled, { createGlobalStyle } from 'styled-components'
import { colors, breakpoints } from './variables'
import Section from './components/Section'
import Button from './components/Button'
import featuredImage from './img/billboard.png'
import Services from './components/services/Services'

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Main>
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
            We can provide your business with many kinds of products and
            services
          </h3>
          <Button>Services</Button>

          <Services />
        </Section>
      </Main>
    </div>
  )
}

const Main = styled.main`
  padding: 32px;

  @media only screen and (min-width: ${breakpoints.smallDesktop}px) {
    padding: 64px 152px;
  }

  @media only screen and (min-width: ${breakpoints.largeDesktop}px) {
    padding: 32px 244px;
  }
`

const FeaturedImage = styled.img`
  width: 100%;
  height: 500px;

  object-fit: cover;

  @media only screen and (min-width: ${breakpoints.tablet}px) {
    height: 350px;
  }
`

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
  }

  body {
    color: ${colors.primary};
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
  }

  h1 {
    font-weight: 800;
    font-size: 40px;
    line-height: 90%;
  }

  h2 {
    font-weight: 600;
    font-size: 32px;
    line-height: 90%;
  }

  h3 {
    font-weight: normal;
    font-size: 20px;

    color: ${colors.black};
  }

  h4 {
    font-weight: 600;
    font-size: 10px;
    line-height: 15px;
    letter-spacing: 4px;
    text-transform: uppercase;

    color: ${colors.gray};

    @media (min-width: 453px) {
      font-size: 12px;
    }
  }

  h5 {
    font-size: 16px;
    font-weight: 600;
    line-height: 125%;
    text-transform: uppercase;
  }

  p {
    line-height: 125%;
    color: ${colors.black};
  }

`

export default App
