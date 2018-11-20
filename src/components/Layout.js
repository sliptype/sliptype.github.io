import React from 'react'
import Link from 'gatsby-link'
import styled, { keyframes } from 'styled-components'

import AppContainer from './AppContainer'
import Title from './Title'
import Heading from './Heading'
import Grid from './Grid'

const Content = styled(AppContainer)`
  max-width: 50rem;

  grid-column: 1 / span 10;
  grid-row: 3 / span 10;
  padding: 2rem;

  @media (min-width: 50rem) {
    padding: 4rem;
  }

  @media (min-width: 80rem) {
    grid-column: 3 / span 6;
    grid-row: 2 / span 10;
  }

  @media (min-width: 170rem) {
    grid-column: 4 / span 4;
    grid-row: 2 / span 10;
  }

  font-size: 1.1rem;
  background-color: white;
`

const BackgroundContainer = styled.div`
`

const getTitle = (isIndex) => isIndex
  ? (
      <Title>
        <Link to={ '/' }>
          @sliptype
        </Link>
      </Title>
    )
  : (
      <Heading>
        <Link to={ '/' }>
          @sliptype
        </Link>
      </Heading>
    )

const getContent = (isIndex, children) => isIndex
      ? (
          <Grid render={() => (
            <Content>
              { getTitle(isIndex) }
              { children }
            </Content>
          )}/>
      )
      : (
          <Content>
            { getTitle(isIndex) }
            { children }
          </Content>
        )

const Layout = ({ location, children }) => {
  const isIndex = location.pathname === '/'

  return (
    <div>
      { getContent(isIndex, children) }
    </div>
  )
}

export default Layout


