import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { injectGlobal } from 'styled-components'

injectGlobal`
  body {
    margin: 0;
    text-size-adjust: 100%;
  }
`

const Layout = ({ children }) => (
  <div>
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
              language
            }
          }
        }
      `}
      render={data => (
        <Helmet
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
        >
          <html lang={data.site.siteMetadata.language} />
        </Helmet>
      )}
    />

    <div>{children}</div>
  </div>
)

export default Layout
