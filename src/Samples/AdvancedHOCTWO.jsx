import React from 'react'
import withToggler from "./HOCs/withToggler"

const AdvancedHOCTwo = (props) =>{
    return(
        <>
        {props.on ? (<p>1</p>) : (<p>0</p>)}
        <button onClick={props.toggle}>TOGGLE</button>
        </>
    )
}

export default withToggler(AdvancedHOCTwo, {defaultValue: true})