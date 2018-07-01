import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = ({ location }) => (
  <Layout location={ location }>
    <p>You just hit a route that doesn&#39;t exist...</p>
  </Layout>
)

export default NotFoundPage
