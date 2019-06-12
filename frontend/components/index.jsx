import React, {Component} from 'react'
import PropTypes from 'prop-types'

import { HEADER_STATES } from '../utils/constants'

function Index(props) {
  return (
    <React.Fragment>
      <div>{HEADER_STATES[props.selectedHeader]}</div>
    </React.Fragment>
  )
}

Index.propTypes = {
  selectedHeader: PropTypes.number
}

export default Index