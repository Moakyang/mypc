import React, { useState } from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

import { HEADER_STATES, SUB_HEADER_STATES } from "../utils/constants";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  logo: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    letterSpacing: theme.spacing(0.5)
  }
}));

function Header(props) {
  const [toggle, settoggle] = useState(true),
    [anchorEl, setanchorEl] = useState(null),
    [subMenu, setsubMenu] = useState([]),
    classes = useStyles(),
    { value, onChange } = props;

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">목양장로교회</Typography>
          <Typography variant="h6">Moakyang Presbyterian Church</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Paper>
        <Tabs
          value={value}
          onChange={onChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {Object.values(HEADER_STATES).map((i, v) => (
            <Tab
              key={v}
              label={i}
              onMouseEnter={e => {
                const currentTarget = e.currentTarget;
                settoggle(true);
                setanchorEl(currentTarget);
                setsubMenu(
                  SUB_HEADER_STATES[currentTarget.children[0].innerText]
                );
              }}
              data-key={v}
              aria-owns={open ? "menu-list-grow" : undefined}
              aria-haspopup={"true"}
            />
          ))}
        </Tabs>
      </Paper>
      <Popper open={toggle} anchorEl={anchorEl} id="menu-list-grow">
        <Paper>
          <MenuList>
            {Object.values(subMenu).map((item, index) => (
              <MenuItem
                key={index}
                onClick={e => {
                  const currentTarget = e.currentTarget;
                  setanchorEl(null);
                  settoggle(false);
                }}
              >
                {item}
              </MenuItem>
            ))}
          </MenuList>
        </Paper>
      </Popper>
    </div>
  );
}

Header.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.number
};

export default Header;
