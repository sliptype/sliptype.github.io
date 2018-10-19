import React from 'react'
import Link from 'gatsby-link'
import styled, { keyframes } from 'styled-components'

import AppContainer from './AppContainer'
import Title from './Title'
import Heading from './Heading'
import Background from './Background'

const Content = styled(AppContainer)`
  position: relative;
  margin: 0 auto 0;

  @media (max-width: 50rem) {
    margin: 0 auto;
  }

  max-width: 50rem;
  padding: 2rem 2rem;
  z-index: 2;
  font-size: 1.1rem;
  background-color: white;
`

const slideIn = keyframes`
  to {
    height: 25vw;
    max-height: 50vh;
    min-height: 5vh;
  }
`

const BackgroundContainer = styled.div`
  overflow: hidden;
  height: 25vw;
  max-height: 30rem;
  @media (min-width: 50rem) {
    margin-bottom: -10rem;
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

const getBackground = (isIndex) => isIndex
  ? (
      <BackgroundContainer>
        <Background />
      </BackgroundContainer>
    )
  : null

const Layout = ({ location, children }) => {
  const isIndex = location.pathname === '/'

  return (
    <div>
      { getBackground(isIndex) }
      <Content>
        { getTitle(isIndex) }
        { children }
      </Content>
    </div>
  )
}

export default Layout
