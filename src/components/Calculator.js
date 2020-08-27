import React from 'react';
// Components
import Screen from './Screen'

export default class Calculator extends React.Component{

    
    render(){
        console.log(this.props)
        return(
            <div>0
            <Screen display={this.props.display}/>
            </div>
        )
    }
       
            
}