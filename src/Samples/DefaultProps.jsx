import React from 'react';

class DefaultPropsSample extends React.Component {
    static defaultProps = {
        cardColor: "gray",
        height: 100,
        width: 100
    }
    render(){
        const styles = {
            backgroundColor: this.props.cardColor,
            height: this.props.height,
            width: this.props.width
        }
        return(
            <div style={styles}>

            </div>
        )
    }
}

export default DefaultPropsSample;