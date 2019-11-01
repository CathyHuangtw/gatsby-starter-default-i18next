import React, { useState } from "react"
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'
import i18next from 'src/i18n/config'

import twLogo from "images/tw.png"
import enLogo from "images/en.png"


const useStyles = makeStyles({
  selectFocus: {
    "&:focus": {
      background: 'transparent'
    }
  }
})

const LanguageMenu = (props) => {
  const classes = useStyles()

  const [values, setValues] = useState({
    language: 'en'
  });

  function handleChange(event) {
    i18next.changeLanguage(event.target.value)

    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  return(
    <Select
      value={values.language}
      onChange={(e) => handleChange(e)}
      disableUnderline
      inputProps={{
        name: 'language'
      }}
      classes={{
        select: classes.selectFocus
      }}
    >
      <MenuItem value={'en'}><img src={enLogo} alt="EN" /></MenuItem>
      <MenuItem value={'zh-Hant'}><img src={twLogo} alt="TW" /></MenuItem>
    </Select>
  )
}

export default LanguageMenu