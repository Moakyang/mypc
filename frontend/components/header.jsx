import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import {HEADER_STATES} from '../utils/constants'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    letterSpacing: theme.spacing(0.5)
  },
}))

function Header(props) {
  const classes = useStyles()
  const {value, onChange} = props

  return (
    <div className={classes.root}>
      <AppBar className={classes.header} position='static'>
        <Toolbar>
          <IconButton edge='start' className={classes.logo} color='inherit' aria-label='Menu'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            목양장로교회
          </Typography>
          <Typography variant='h6' className={classes.title}>
            Moakyang Presbyterian Church
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>

      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={onChange}
          indicatorColor='primary'
          textColor='primary'
          centered
        >

        { Object.values(HEADER_STATES).map((i, v) => <Tab key={v} label={i} /> ) }

        </Tabs>
      </Paper>
    </div>
  )
}

Header.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.number,
}

export default Header