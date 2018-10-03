import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

const SecondPage = () => (
  <Layout>
    <div>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <div>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </div>
  </Layout>
)

export default SecondPage
