import React from 'react';
// Components
import Calculator from './Calculator'

export default class CalculatorPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            display: ""
        }
    }

    render(){
        return(
            <div>
                Calculator
                <Calculator display={this.state.display}/>
            </div>
        )
    }
}