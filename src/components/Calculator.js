import React from 'react';
// Components
import Screen from './Screen'

export default class Calculator extends React.Component {



    render() {
        return (
            <div className="full-calc">
                <br />
                <Screen display={this.props.display} />
                <table className="btn-table">
                    <tbody className="t-body">
                    <tr className="tr-1">
                        <td ><button className="open-par" onClick={(e) => this.props.handleClick(e.target.name)} name="(">(</button></td>
                        <td ><button className="close-par" onClick={(e) => this.props.handleClick(e.target.name)} name=")">)</button></td>
                        <td ><button className="back" onClick={(e) => this.props.handleClick(e.target.name)} name="back-space">⌫</button></td>
                        <td ><button className="clear" onClick={(e) => this.props.handleClick(e.target.name)} name="clear">Clear</button></td>
                
                        {/* <button onClick={(e) => this.props.handleClick(e.target.name) } name="^">^</button> */}
                    </tr>
                    <tr className="tr-2">
                        <td ><button className="7" onClick={(e) => this.props.handleClick(e.target.name)} name="7">7</button></td>
                        <td ><button className="8" onClick={(e) => this.props.handleClick(e.target.name)} name="8">8</button></td>
                        <td ><button className="9" onClick={(e) => this.props.handleClick(e.target.name)} name="9">9</button></td>
                        <td ><button className="mult" onClick={(e) => this.props.handleClick(e.target.name)} name="*">*</button></td>
                    </tr>
                    <tr className="tr-3">
                        <td ><button className="4" onClick={(e) => this.props.handleClick(e.target.name)} name="4">4</button></td>
                        <td ><button className="5" onClick={(e) => this.props.handleClick(e.target.name)} name="5">5</button></td>
                        <td ><button className="6" onClick={(e) => this.props.handleClick(e.target.name)} name="6">6</button></td>
                        <td ><button className="plus" onClick={(e) => this.props.handleClick(e.target.name)} name="+">+</button></td>
                    </tr>
                    <tr className="tr-4">
                        <td ><button className="1" onClick={(e) => this.props.handleClick(e.target.name)} name="1">1</button></td>
                        <td ><button className="2" onClick={(e) => this.props.handleClick(e.target.name)} name="2">2</button></td>
                        <td ><button className="3" onClick={(e) => this.props.handleClick(e.target.name)} name="3">3</button></td>
                        <td ><button className="minus" onClick={(e) => this.props.handleClick(e.target.name)} name="-">-</button></td>
                    </tr>
                    <tr className="tr-5">
                        <td ><button className="0" onClick={(e) => this.props.handleClick(e.target.name)} name="0">0</button></td>
                        <td ><button className="dec" onClick={(e) => this.props.handleClick(e.target.name)} name=".">.</button></td>
                        <td ><button className="equal" onClick={(e) => this.props.handleClick(e.target.name)} name="enter">=</button></td>
                        <td ><button className="divide" onClick={(e) => this.props.handleClick(e.target.name)} name="/">/</button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }


}