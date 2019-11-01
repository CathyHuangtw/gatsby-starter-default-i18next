import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import LanguageMenu from './languageMenu'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        padding: `10px`,
        maxWidth: 960,
        textAlign: `center`
      }}
    >
      <h1 
        style={{ 
          margin: `20px`,
          display: `inline`
        }}
      >
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <LanguageMenu></LanguageMenu>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
