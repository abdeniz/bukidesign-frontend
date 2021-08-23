import React from 'react'
import styled from 'styled-components'
import { colors } from '../variables'
import facebook from '../img/fb.svg'
import instagram from '../img/ig.svg'
import { breakpoints } from '../variables'

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <div>
          <ContentHeader>Email, call or visit us!</ContentHeader>
          <p>info@bukidesign.com</p>
          <p>+383 49 111 335</p>
          <p>+383 44 188 838</p>
          <br />
          <p>Rr. Arsim Muzaqi 6</p>
          <p>4200 Vushtrri, Kosovo</p>
        </div>

        <div>
          <ContentHeader>Follow us on socials</ContentHeader>
          <SocialsIcon src={instagram} />
          <SocialsIcon src={facebook} />
        </div>
      </FooterContent>

      <Copyright>
        <h4>2021 © Buki Design | All rights reserved</h4>
        <h4>
          Designed & developed by{' '}
          <a href='https://deniz.tech'>Deniz Abdurrahmani</a>
        </h4>
      </Copyright>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  background-color: ${colors.primary};

  padding: 32px;

  & * {
    color: ${colors.white};
  }

  @media only screen and (min-width: ${breakpoints.smallDesktop}px) {
    padding: 64px 152px;
  }

  @media only screen and (min-width: ${breakpoints.largeDesktop}px) {
    padding: 64px 244px;
  }
`
const FooterContent = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    margin-bottom: 32px;
  }

  @media only screen and (min-width: ${breakpoints.smallDesktop}px) {
    flex-direction: row;

    & > div {
      margin-right: 32px;
    }
  }
`

const ContentHeader = styled.h3`
  margin-bottom: 16px;
`

const SocialsIcon = styled.img`
  padding-right: 16px;
`

const Copyright = styled.div`
  & > h4:first-of-type {
    margin-bottom: 8px;
  }

  & h4 > a {
    text-decoration: underline;
  }
`

export default Footer
