import React from 'react'
import PropTypes from 'prop-types'

const DefaultProps_PropTypes = (props) => {
    return (
        <img src={props.src} style={{borderRadius: props.borderRadius, width: '100px'}}/>
    )
}

DefaultProps_PropTypes.propTypes = { 
    src: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    borderRadius: PropTypes.string.isRequired

}
DefaultProps_PropTypes.defaultProps = {
    borderRadius: '50%',
}




export default DefaultProps_PropTypes