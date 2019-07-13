import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    fontSize: '24px'
  },
  logo: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    letterSpacing: theme.spacing(0.5)
  }
}))

function Jimin() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          tempora repellendus cum ex quos vel placeat, odio quibusdam earum quo,
          magni est cumque modi debitis magnam nam vero aliquid officiis.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          tempora repellendus cum ex quos vel placeat, odio quibusdam earum quo,
          magni est cumque modi debitis magnam nam vero aliquid officiis.
        </div>
      </div>
      <div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          tempora repellendus cum ex quos vel placeat, odio quibusdam earum quo,
          magni est cumque modi debitis magnam nam vero aliquid officiis.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          tempora repellendus cum ex quos vel placeat, odio quibusdam earum quo,
          magni est cumque modi debitis magnam nam vero aliquid officiis.
        </div>
      </div>
      <div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          tempora repellendus cum ex quos vel placeat, odio quibusdam earum quo,
          magni est cumque modi debitis magnam nam vero aliquid officiis.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          tempora repellendus cum ex quos vel placeat, odio quibusdam earum quo,
          magni est cumque modi debitis magnam nam vero aliquid officiis.
        </div>
      </div>
      <div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          tempora repellendus cum ex quos vel placeat, odio quibusdam earum quo,
          magni est cumque modi debitis magnam nam vero aliquid officiis.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          tempora repellendus cum ex quos vel placeat, odio quibusdam earum quo,
          magni est cumque modi debitis magnam nam vero aliquid officiis.
        </div>
      </div>
    </div>
  )
}

export default Jimin
