import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    boxShadow: 'None'
  },
  header: {
    alignContent: theme.spacing(3, 2)
  }
}))

function Third() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3" className={classes.header}>
          행사 / 소식
        </Typography>
        <Typography component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo tempora repellendus cum ex quos vel placeat, odio quibusdam earum quo, magni est cumque modi debitis magnam nam vero aliquid officiis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, vero nostrum? Perferendis eum sequi dolores atque nobis, sapiente cumque voluptate qui expedita iste, repellendus quas nostrum placeat in eligendi ipsa!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aspernatur quam itaque! Voluptatibus optio animi, deleniti porro cum voluptate sed consequatur accusantium laudantium voluptas velit amet, soluta corrupti illo ad!
        </Typography>
      </Paper>

      <Divider variant='middle' />
    </React.Fragment>
  )
}

export default Third