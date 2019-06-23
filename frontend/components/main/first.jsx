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

function First() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3" className={classes.header}>
          주일 설교 / 말씀
        </Typography>
        <Typography component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo tempora repellendus cum ex quos vel placeat, odio quibusdam earum quo, magni est cumque modi debitis magnam nam vero aliquid officiis.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, velit voluptatem! Quia labore magni architecto. Qui ut aliquid omnis placeat debitis magni quisquam rem. Vitae alias labore quas saepe minus?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident at tenetur tempore inventore eaque quibusdam asperiores molestias tempora dicta! Debitis dicta, natus minima voluptatibus aut maiores. Quos id incidunt fugit?

        </Typography>
      </Paper>

      <Divider variant='middle' />
    </React.Fragment>
  )
}

export default First