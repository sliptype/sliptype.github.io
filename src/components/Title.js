import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  margin-bottom: 0;
  font-size: 2.8rem;
  line-height 3.6rem;
  & a {
    color: black;
  }

  @media (max-width: 50rem) {
    margin-top: 0;
  }
`

export default Title