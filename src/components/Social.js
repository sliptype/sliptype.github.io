import React from 'react'
import styled from 'styled-components'

const SocialUl = styled.ul`
  margin: 1em 0 0 0;
  padding: 0;
  font-size: .85em;
  display: flex;

  & li + li {
    border-left: transparent;
  }
`

const SocialLi = styled.li`
  display: inline;
  border: 1px solid rgba(6, 57, 78, 0.27);
`

const SocialLiFirst = styled(SocialLi)`
  border-radius: 4px 0 0 4px
`

const SocialLiLast = styled(SocialLi)`
  border-radius: 0 4px 4px 0
`

const SocialA = styled.a`
  padding: .4em 1em;
  color: rgba(6, 57, 78, 0.5);
  display: block;
  font-size: .9em;

  &:hover {
    color: rgba(6, 57, 78, 1);
  }
`

const Social = () => (
  <SocialUl>
    <SocialLiFirst>
      <SocialA href="https://github.com/sliptype">Github</SocialA>
    </SocialLiFirst>
    <SocialLi>
      <SocialA href="https://gitlab.com/sliptype">Gitlab</SocialA>
    </SocialLi>
    <SocialLiLast>
      <SocialA href="https://stackoverflow.com/users/5705462/sliptype">Stack</SocialA>
    </SocialLiLast>
  </SocialUl>
)

export default Social
