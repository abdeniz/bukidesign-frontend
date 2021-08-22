import styled from 'styled-components'
import { colors } from '../variables'

const Button = styled.a`
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.6px;
  color: inherit;

  padding: 16px 48px;

  background-color: ${colors.primary};
  color: ${colors.white};

  display: inline-block;

  transition: 0.2s;

  cursor: pointer;

  &:hover {
    color: ${colors.primary};
    background-color: ${colors.white};
  }
`

export default Button
