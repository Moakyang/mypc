/* eslint-disable semi */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink, withRouter } from 'react-router-dom'

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
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Link from '@material-ui/core/Link'

import SubMenu from './submenu'

import {
  HEADER_STATES,
  SUB_HEADER_STATES,
  HEADER_STATES_LINKS
} from '../../utils/constants'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    border: 'None',
    boxShadow: 'None',
  },
  logo: {
    marginRight: theme.spacing(2)
  },
  menu: {
    flexGrow: 1,
    cursor: 'pointer',
  },
  title: {
    flexGrow: 1,
    letterSpacing: theme.spacing(0.5)
  },
}))

function Header(props) {
  const [toggle, setToggle] = useState(false),
    [anchorEl, setAnchorEl] = useState(this),
    [subMenu, setsubMenu] = useState([]),
    [routeLink, setRouteLink] = useState(),
    classes = useStyles(),
    { value, onChangeHeader } = props
  const closeToggle = () => {
    setToggle(false)
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.header} position='static'>
        <Toolbar>
          <IconButton
            className={classes.logo}
            edge='start'
            color='inherit'
            aria-label='Menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant='h6'>
            목양장로교회
          </Typography>
          <Typography className={classes.title} variant='h6'>
            Moakyang Presbyterian Church
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
      <ClickAwayListener onClickAway={closeToggle}>
        <Paper className={classes.root}>
          <Tabs
            value={value}
            indicatorColor='primary'
            centered
          >
            {Object.values(HEADER_STATES).map((i, v) => (
              <Tab
                disableFocusRipple
                disableRipple
                key={v}
                label={i}
                data-key={v}
                onClick={e => {
                  const ct = e.currentTarget
                  onChangeHeader(v)
                  setToggle(true)
                  setAnchorEl(ct)
                  setsubMenu(SUB_HEADER_STATES[v])
                  setRouteLink(HEADER_STATES_LINKS[v])
                }}
              />
            ))}
          </Tabs>
        </Paper>
      </ClickAwayListener>
      <SubMenu
        toggle={toggle}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        setToggle={setToggle}
        subMenu={subMenu}
        routeLink={routeLink}
      />
    </div>
  )
}

Header.propTypes = {
  onChangeHeader: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.bool])
}

export default withRouter(Header)
