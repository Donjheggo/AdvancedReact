import React from 'react'
import withToggler from './HOCs/withToggler'

const AdvancedHOC = (props) => {
    return(
        <>
        {props.on ? (<p>ON</p>) : (<p>OFF</p>)}
        <button onClick={props.toggle}>TOGGLE</button>
        </>
    )
}

export default withToggler(AdvancedHOC, {defaultValue: false})




