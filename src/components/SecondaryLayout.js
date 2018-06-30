import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import AppContainer from './AppContainer'

const Heading = styled.h3`
  margin-bottom: 0;
`

const Layout = ({ children }) => (
  <AppContainer>
    <Heading>
      <Link to={ '/' }>
        @sliptype
      </Link>
    </Heading>
    { children }
  </AppContainer>
)

export default Layout
