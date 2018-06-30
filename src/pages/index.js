import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Bio from '../components/Bio'
import 'normalize.css'
import '../styles.css'

const PostTitle = styled.h3`
  margin-bottom: 0;
`

const Index = (props) => {

  const siteTitle = props.data.site.siteMetadata.title
  const posts = props.data.allMarkdownRemark.edges

  return (
    <Layout location={props.location}>
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>
      <Bio />
      {posts.map(({ node }) => {
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
