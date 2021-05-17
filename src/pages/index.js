import * as React from 'react'
import Layout from '../components/layout'
import Media from '../components/media'

const IndexPage = () => {
  return (
    <Layout pageTitle="Rodrigo">
          <h1>Welcome to my site!</h1>
            <p>This page is to show my projects.</p>
    <Media></Media>
    </Layout>
  )
}

export default IndexPage