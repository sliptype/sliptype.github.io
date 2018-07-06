import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Bio from '../components/Bio'
import 'normalize.css'
import 'prismjs/themes/prism-tomorrow.css'
import '../styles.css'

const PostTitle = styled.h3`
  margin-bottom: 0;
`

const postsPerPage = 3;

const getPageIndex = (location) => Number.parseInt(location.hash.replace('#', ''));

const slicePosts = (posts, pageIndex) => {
  return posts.slice(0, pageIndex * postsPerPage)
}

const isLastPage = (posts, pageIndex) => posts.length <= pageIndex * postsPerPage

const Index = (props) => {

  const siteTitle = props.data.site.siteMetadata.title
  const posts = props.data.allMarkdownRemark.edges
  const pageIndex = props.location.hash ? getPageIndex(props.location) + 1 : 1

  return (
    <Layout location={props.location}>
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>
      <Bio />
      {slicePosts(posts, pageIndex).map(({ node }) => {
        const title = get(node, 'frontmatter.title') || node.fields.slug
        return (
          <div key={node.fields.slug}>
            <PostTitle>
              <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                {title}
              </Link>
            </PostTitle>
            <small>{node.frontmatter.date}</small>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        )
      })}
      { !isLastPage(posts, pageIndex)
        &&
        <Link to={ `#${ pageIndex }` }>
          More...
        </Link>
      }
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
