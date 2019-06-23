import React, {Component} from 'react'
import PropTypes from 'prop-types'

import { HEADER_STATES } from '../utils/constants'

import { First, Second, Third } from './main'

function Index(props) {
  return (
    <React.Fragment>
      <First />
      <Second />
      <Third />
    </React.Fragment>
  )
}

Index.propTypes = {
  selectedHeader: PropTypes.number
}

export default Index