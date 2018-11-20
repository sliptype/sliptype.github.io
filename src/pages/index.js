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

const ReadMoreLink = styled.span`
  margin: 0 1rem;
`

const MorePostsLink = styled.div`
  margin: 0 0 2rem;
`

const postsPerPage = 3;

const getPageIndex = (location) => Number.parseInt(location.hash.replace('#', ''));

const postThreshold = (pageIndex) => (pageIndex + 1) * postsPerPage

const slicePosts = (posts, pageIndex) => {
  const threshold = postThreshold(pageIndex)
  return posts.slice(threshold - postsPerPage, threshold)
}

const isFirstPage = (pageIndex) => pageIndex === 0
const isLastPage = (posts, pageIndex) => posts.length <= postThreshold(pageIndex)

const Index = (props) => {

  const siteTitle = props.data.site.siteMetadata.title
  const posts = props.data.allMarkdownRemark.edges
  const pageIndex = props.location.hash ? getPageIndex(props.location) : 0

  return (
    <Layout location={props.location}>
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>
      <Bio />
      { !isFirstPage(pageIndex)
        &&
        <Link to={ `#${ pageIndex - 1 }` }>
        <MorePostsLink>
          Newer Posts...
        </MorePostsLink>
        </Link>
      }
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
            <p>
              <span dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              <Link to={node.fields.slug}>
                <ReadMoreLink>
                  Read More
                </ReadMoreLink>
              </Link>
            </p>
          </div>
        )
      })}
      { !isLastPage(posts, pageIndex)
        &&
        <Link to={ `#${ pageIndex + 1 }` }>
          <MorePostsLink>
            Older Posts...
          </MorePostsLink>
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
          excerpt(pruneLength: 240)
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
