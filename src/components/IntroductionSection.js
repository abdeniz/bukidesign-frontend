import React from 'react'
import Section from './Section'
import Button from './Button'
import jsonData from '../data.json'

const Introduction = () => {
  const data = jsonData.introduction

  return (
    <Section>
      <h4>{data.header4}</h4>
      <h1>{data.header1}</h1>
      <h3>{data.header3}</h3>
      <Button>{data.buttonText}</Button>
    </Section>
  )
}

export default Introduction
