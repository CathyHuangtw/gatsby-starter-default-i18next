import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"

const SecondPage = () => {
  const { t } = useTranslation()

  return(
    <div>
      <SEO title="Page two" />
      <h1>{t('page2.title')}</h1>
      <p>{t('page2.content')}</p>
      <Link to="/">{t('page2.link')}</Link>
    </div>
  )
}
export default SecondPage
