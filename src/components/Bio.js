import React from 'react'
import styled from 'styled-components'

import Social from './Social'

const BioContainer = styled.div`
  margin-bottom: 3rem;
`

const Bio = () => (
  <BioContainer>
    <p>
      Hi! I'm Sebastian Klingler. I'm a UI engineer with a passion for building effective & maintainable systems.
    </p>
    <Social />
  </BioContainer>
)

export default Bio
