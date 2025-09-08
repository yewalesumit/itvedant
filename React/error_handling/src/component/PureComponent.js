import React, { PureComponent } from 'react'

class PureChild extends PureComponent{
    render(){
        console.log("PureComponent Rendered");
        return <h2>{this.props.message}</h2>
    }
}

export default PureComponent;