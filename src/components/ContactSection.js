import React from 'react'
import Button from './Button'
import Section from './Section'
import jsonData from '../text.json'

const ContactSection = () => {
  const data = jsonData.contact

  return (
    <Section>
      <h4>{data.header4}</h4>
      <h1>{data.header1}</h1>
      <h3>{data.header3}</h3>
      <Button>{data.buttonText}</Button>
    </Section>
  )
}

export default ContactSection
