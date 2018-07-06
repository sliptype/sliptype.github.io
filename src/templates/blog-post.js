import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Title from '../components/Title'
import Bio from '../components/Bio'

const BlogPostTemplate =
  ({
    data: {
      site: {
        siteMetadata: metadata
      },
      markdownRemark: post 
    },
    location
  }) => (
    <Layout location={ location }>
      <Helmet title={`${ post.frontmatter.title } | ${ metadata.title }`} />
      <Title>{ post.frontmatter.title }</Title>
      <small>
        { post.frontmatter.date }
      </small>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
