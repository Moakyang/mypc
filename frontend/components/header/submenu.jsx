import React, { Component } from 'react'

import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'

class SubMenu extends Component {
    render() {
        const { toggle, setToggle, anchorEl, setAnchorEl, subMenu } = this.props

        return (
            <Popper open={toggle} anchorEl={anchorEl} disablePortal id='menu-list-grow'>
                <Paper>
                    <MenuList>
                        {Object.values(subMenu).map((item, index) => (
                            <MenuItem
                                key={index}
                                onClick={e => {
                                    const currentTarget = e.currentTarget
                                    setAnchorEl(e)
                                    setToggle(false)
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

export default SubMenu