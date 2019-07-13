import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'

class SubMenu extends Component {
  constructor(props) {
    super(props)
    this.handleCallToRouter.bind(this)
  }

  handleCallToRouter(route) {
    this.props.history.push(route)
  }

  render() {
    const {
      toggle,
      setToggle,
      anchorEl,
      setAnchorEl,
      subMenu,
      routeLink
    } = this.props

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
                  this.handleCallToRouter(routeLink)
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
}

export default withRouter(SubMenu)
