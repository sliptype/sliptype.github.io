import React from 'react'
import Link from 'gatsby-link'
import styled, { keyframes } from 'styled-components'

import AppContainer from './AppContainer'
import Title from './Title'
import Heading from './Heading'
import Grid from './Grid'

const Content = styled(AppContainer)`
  font-size: 1.1rem;
  background-color: white;
  max-width: 50rem;
  padding: 2rem;
  margin: auto;
`

const IndexContent = styled(Content)`
  @media (min-aspect-ratio: 1/1) {
    padding: 8rem 4rem;
    margin-left: 20vw;
  }

  @media (min-aspect-ratio: 3/2) {
    margin-left: 30vw;
  }
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
            <IndexContent>
              { getTitle(isIndex) }
              { children }
            </IndexContent>
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


