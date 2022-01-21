import * as React from 'react'
import Layout from '../components/layout'
import Media from '../components/media'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Rodrigo">
      <canvas className="webgl"></canvas>
          <h1>Welcome to my site!</h1>
            <p>This page is to show my projects.</p>
            <div className="profile">
              <StaticImage src="../images/rodrigo.jpg" alt="rodrigo" className="photo"></StaticImage>
            </div>
    <Media></Media>
    </Layout>
  )
}

export default IndexPage
