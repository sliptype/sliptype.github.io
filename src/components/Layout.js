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

  @media (min-width: 50rem) {
    padding: 8rem 4rem;
    margin-left: 20vw;
  }

  @media (min-width: 70rem) {
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


