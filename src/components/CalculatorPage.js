import React from 'react';
// Components
import Calculator from './Calculator'

export default class CalculatorPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            display: ""
        }
    }

    //decides what function to execute based on the button pressed
    handleClick = (button) => {
        switch (button) {
            case "enter":
                this.calculate()
                break;
            case "clear":
                this.clear()
                break;
            case "back-space":
                this.backSpace()
                break;
            default:
                this.setState({
                    display: this.state.display + button
                })
        }

    }

    //clears the display 
    clear = () => {
        this.setState({
            display: ""
        })
    }
    //removes the last entered number/symbol
    backSpace = () => {
        this.setState({
            display: this.state.display.slice(0, -1)
        })
    }
    //calculate based on the operand 
    calculate = () => {
        try {
            if (((eval(this.state.display) || "") + "").length > 16) {
                console.log("ok")
                const answer = ((eval(this.state.display) || "") + "").length
                this.setState({
                    display: answer.toExponential()
            })
        }else {
            this.setState({
                display: (eval(this.state.display) || "") + ""
            })
        }
    }
    catch(e) {
        this.setState({
            display: "ERROR"
        })
        setTimeout(() => this.clear(), 1000);
    }
}

render() {
    return (
        <div>
            Calculator
            <Calculator handleClick={this.handleClick} display={this.state.display} />
        </div>
    )
}
}