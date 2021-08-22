import Header from './components/Header'
import styled, { createGlobalStyle } from 'styled-components'
import { colors, breakpoints } from './variables'
import Home from './pages/Home'

import { BrowserRouter as HashRouter, Route, Switch } from 'react-router-dom'
import About from './pages/About'
import Footer from './components/Footer'

function App() {
  return (
    <HashRouter>
      <div>
        <GlobalStyle />
        <Header />
        <Main>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
          </Switch>
        </Main>
        <Footer />
      </div>
    </HashRouter>
  )
}

const Main = styled.main`
  padding: 32px;

  @media only screen and (min-width: ${breakpoints.smallDesktop}px) {
    padding: 0 152px;
  }

  @media only screen and (min-width: ${breakpoints.largeDesktop}px) {
    padding: 0 244px;
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
    background-color: ${colors.white};
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
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 4px;
    text-transform: uppercase;

    color: ${colors.gray};
  }

  h5 {
    font-size: 14px;
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
