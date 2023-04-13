import React from 'react'
import PropTypes from 'prop-types'

const PropTypesSample = (props) => {
    const styles = {
        backgroundColor: props.cardColor,
        width: props.width,
        height: props.height
    }
  return (
    <div style={styles}></div>
  )
}

PropTypesSample.propTypes = {
    cardColor: PropTypes.oneOf(["gray", "lightblue", "pink"]).isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
}

PropTypesSample.defaultProps = {
    cardColor: 'gray',
    width: 100,
    height: 100
}

export default PropTypesSample