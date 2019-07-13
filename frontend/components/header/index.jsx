/* eslint-disable semi */
import React, { useState } from 'react'
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
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

import SubMenu from './submenu'

import { HEADER_STATES, SUB_HEADER_STATES } from '../../utils/constants'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    cursor: 'pointer'
  },
  logo: {
    marginRight: theme.spacing(2)
  },
  menu: {
    flexGrow: 1,
    cursor: 'pointer',
    boxShadow: 'None',
  },
  title: {
    flexGrow: 1,
    letterSpacing: theme.spacing(0.5)
  }
}))

function Header(props) {
  const [toggle, setToggle] = useState(false),
    [anchorEl, setAnchorEl] = useState(this),
    [subMenu, setsubMenu] = useState([]),
    classes = useStyles(),
    { value, onChange } = props

  const closeToggle = () => {
    setToggle(false)
  }

  return (
    <ClickAwayListener onClickAway={closeToggle}>
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
        <Paper className={classes.menu}>
          <Tabs
            value={value}
            indicatorColor='primary'
            textColor='primary'
            centered
          >
            {Object.values(HEADER_STATES).map((i, v) => (
              <Tab
                aria-owns={open ? 'menu-list-grow' : undefined}
                aria-haspopup={'true'}
                disableFocusRipple
                disableRipple
                key={v}
                label={i}
                data-key={v}
                onClick={e => {
                  const ct = e.currentTarget
                  onChange('', v)
                  setToggle(true)
                  setAnchorEl(ct)
                  setsubMenu(SUB_HEADER_STATES[v])
                }}
              />
            ))}
          </Tabs>
        </Paper>
        <SubMenu
          toggle={toggle}
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          setToggle={setToggle}
          subMenu={subMenu} />
      </div>
    </ClickAwayListener>
  )
}

Header.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.bool])
}

export default Header
