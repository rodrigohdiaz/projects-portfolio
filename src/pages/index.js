import * as React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <main>
      <Link to='/about'>About</Link>
      <title>Home Page</title>
      <h1>Welcome to my site!</h1>
      <p>This page is to show my projects.</p>
    </main>
  )
}

export default IndexPage