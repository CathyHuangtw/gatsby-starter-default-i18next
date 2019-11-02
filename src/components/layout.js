/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { withTrans } from '../i18n/withTrans'

import Header from "./header"
import "./layout.css"

const Layout = ({ children, t, i18n }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const translatedTitle = t(`site.${data.site.siteMetadata.title}`)
  return (
    <>
      <Header siteTitle={translatedTitle} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>
          {children}
        </main>
        <footer>
          © {new Date().getFullYear()}, {t(`site.footer`)}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withTrans(Layout)
