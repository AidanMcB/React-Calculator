import React from 'react'

export default class Screen extends React.Component{

    render(){
        return(
            <div className="display">{this.props.display}</div>

        )
    }
}