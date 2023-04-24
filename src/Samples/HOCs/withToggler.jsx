import React from 'react'

class Toggle extends React.Component{
    state = {
        on: this.props.defaultValue
    }
    toggle = () => {
        this.setState(prev => ({on: !prev.on}))
    }
    render(){
        const {component: Component, defaultValue, ...props} = this.props
        return (
            <Component on={this.state.on} toggle={this.toggle} {...props}/>
        )
    }
}

const withToggler = (component, defaultObj) => {
    return (props) => {
        return(
            <Toggle component={component} defaultValue={defaultObj.defaultValue} {...props}/>
        )
     }
}

export default withToggler;