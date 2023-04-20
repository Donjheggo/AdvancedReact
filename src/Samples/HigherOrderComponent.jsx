import React from 'react'

const HigherOrderComponent = (component) => {
    const Component = component
    return (props) => {
        return (
            <Component favoriteNumber={21} {...props}/>
        )
    }
}

export default HigherOrderComponent;