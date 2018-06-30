import React from 'react'
import styled from 'styled-components'

const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100vw;
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: repeat(10, 1fr);
  margin-bottom: 3rem;
  z-index: 1;
`

const colors = [
  'rgba(1, 186, 239)'
  ,'rgba(31, 32, 65)'
  ,'rgb(235, 186, 185)'
  ,'rgba(17, 157, 164)'
  ,'rgba(25, 100, 126)'
]

const borders = [
  '100% 0 0 0'
  ,'0 100% 0 0'
  ,'0 0 100% 0'
  ,'0 0 0 100%'
]

const randomElement = (array) => array[Math.floor(Math.random() * array.length)];

const makeCell = (id) => {
  const Cell = styled.div`
    background: ${ randomElement(colors) };
    border-radius: ${ randomElement(borders) };
  `

  return <Cell key={ id }/>
}

const makeCells = () => (new Array(100)).fill(0).map((_, id) => makeCell(id));

const Background = () => (
  <BackgroundContainer>
    { makeCells() }
  </BackgroundContainer>
)

export default Background
