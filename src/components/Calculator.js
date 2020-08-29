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
            <div className="row1">
            <button name="(">(</button>
            <button name=")">)</button>
            <button name="">*</button>
            <button name="">/</button>
            <button name="">^</button>
            <button name="">Clear</button>
            </div>
            <br/>
            <div className="row2">
            <button name="">7</button>
            <button name="">8</button>
            <button name="">9</button>
            <button name="">Back Space</button>
            </div>
            <br/>
            <div className="row3">
            <button name="">4</button>
            <button name="">5</button>
            <button name="">6</button>
            <button name="">+</button>
            </div>
            <br/>
            <div className="row4">
            <button name="">1</button>
            <button name="">2</button>
            <button name="">3</button>
            <button name="">-</button>
            </div>
            <br/>
            <div className="row5">
            <button>0</button>
            <button>.</button>
            <button>00</button>
            <button>Enter</button>
            </div>
            </div>
        )
    }
       
            
}