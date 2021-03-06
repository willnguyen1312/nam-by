import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout>
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
