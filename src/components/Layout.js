import React from 'react'
import Link from 'gatsby-link'
import styled, { keyframes } from 'styled-components'

import AppContainer from './AppContainer'
import Title from './Title'
import Background from './Background'

const Content = styled(AppContainer)`
  position: relative;
  margin: -10rem auto 0;
  max-width: 50rem;
  padding: 2rem 2rem;
  z-index: 2;
  font-size: 1.1rem;
  background-color: white;
`

const FlexContainer = styled.div`
  display: flex;
`

const slideIn = keyframes`
  to {
    height: 25vw;
    max-height: 50vh;
    min-height: 5vh;
  }
`

const BackgroundContainer = styled.div`
  height: 100vh;
  max-height: 100vh;
  min-height: 0vh;
  overflow: hidden;
  animation: ${slideIn} .5s ease-in-out forwards;
`

const getRootPath = () => {
  if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    return __PREFIX_PATHS__ + `/`
  }

  return `/`
}

const Layout = ({ children }) => (
  <div>
    <BackgroundContainer>
      <Background />
    </BackgroundContainer>
    <Content>
      <FlexContainer>
        <Title>
          <Link to={ '/' }>
            @sliptype
          </Link>
        </Title>
      </FlexContainer>
      { children }
    </Content>
  </div>
)

export default Layout
