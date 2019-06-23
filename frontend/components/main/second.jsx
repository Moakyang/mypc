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

function Second() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3" className={classes.header}>
          찬양 / 성가대
        </Typography>
        <Typography component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo tempora repellendus cum ex quos vel placeat, odio quibusdam earum quo, magni est cumque modi debitis magnam nam vero aliquid officiis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, minima omnis, perferendis officiis quae quam, nostrum non assumenda dicta ullam atque error a dignissimos at cupiditate similique quod eos repellendus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam corrupti, labore laudantium maiores qui non dicta ratione molestias impedit nam, veritatis tenetur assumenda quasi. Earum quaerat omnis minima recusandae quasi.
        </Typography>
      </Paper>

      <Divider variant='middle' />
    </React.Fragment>
  )
}

export default Second