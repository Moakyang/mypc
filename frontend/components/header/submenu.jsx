import React from 'react'
import { withRouter } from 'react-router-dom'

import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'

function SubMenu(props) {
  const handleCallToRouter = route => props.history.push(route)
  const {
    toggle,
    setToggle,
    anchorEl,
    setAnchorEl,
    subMenu,
    routeLink
  } = props

  return (
    <Popper
      open={toggle}
      anchorEl={anchorEl}
      disablePortal
      id='menu-list-grow'
    >
      <Paper>
        <MenuList>
          {Object.values(subMenu).map((item, index) => (
            <MenuItem
              key={index}
              onClick={e => {
                setAnchorEl(e)
                setToggle(false)
                handleCallToRouter(routeLink)
              }}
            >
              {item}
            </MenuItem>
          ))}
        </MenuList>
      </Paper>
    </Popper>
  )
}

export default withRouter(SubMenu)
