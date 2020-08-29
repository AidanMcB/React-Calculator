import React from 'react';
// Components
import Screen from './Screen'

export default class Calculator extends React.Component{

    
    render(){
        console.log(this.props)
        return(
            <div>
            <br />
            <Screen display={this.props.display}/>
            <div class="row1">
            <button>*</button>
            <button>/</button>
            <button>^</button>
            <button>Clear</button>
            </div>
            <br/>
            <div class="row2">
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>Back Space</button>
            </div>
            <br/>
            <div class="row3">
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>+</button>
            </div>
            <br/>
            <div class="row4">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>-</button>
            </div>
            <br/>
            <div class="row5">
            <button>0</button>
            <button>.</button>
            <button>00</button>
            <button>Enter</button>
            </div>
            </div>
        )
    }
       
            
}