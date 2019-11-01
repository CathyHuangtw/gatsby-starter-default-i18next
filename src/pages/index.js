import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"

const IndexPage = (props) => {
  const { t } = useTranslation()

  return (
    <div>
      <SEO title="Home" />
      <h1>{t('home.title')}</h1>
      {t('home.content').split('\n').map(function(item, key) {
          return (
            <p key={key}>
              {item}
            </p>
          )
        })
      }
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">{t('home.link')}</Link>
    </div>
  )
}

export default IndexPage
