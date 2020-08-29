import React from 'react';
// Components
import Screen from './Screen'

export default class Calculator extends React.Component {



    render() {
        return (
            <div className="full-calc">
                <br />
                <Screen display={this.props.display} />
                <div className="btn-grid">
                    <div className="row1">
                        <button onClick={(e) => this.props.handleClick(e.target.name) } name="(">(</button>
                        <button onClick={(e) => this.props.handleClick(e.target.name) } name=")">)</button>
                        <button onClick={(e) => this.props.handleClick(e.target.name) } name="*">*</button>
                        <button onClick={(e) => this.props.handleClick(e.target.name) } name="/">/</button>
                        <button onClick={(e) => this.props.handleClick(e.target.name) } name="^">^</button>
                        <button onClick={(e) => this.props.handleClick(e.target.name) } name="clear">Clear</button>
                    </div>
                    <br />
                    <div className="row2">
                        <button onClick={(e) => this.props.handleClick(e.target.name) } name="7">7</button>
                        <button onClick={(e) => this.props.handleClick(e.target.name) } name="8">8</button>
                        <button onClick={(e) => this.props.handleClick(e.target.name) } name="9">9</button>
                        <button onClick={(e) => this.props.handleClick(e.target.name) } name="back-space">Back Space</button>
                    </div>
                    <br />
                    <div className="row3">
                        <button onClick={(e) => this.props.handleClick(e.target.name) } name="4">4</button>
                        <button onClick={(e) => this.props.handleClick(e.target.name) } name="5">5</button>
                        <button onClick={(e) => this.props.handleClick(e.target.name) } name="6">6</button>
                        <button onClick={(e) => this.props.handleClick(e.target.name) } name="+">+</button>
                    </div>
                    <br />
                    <div className="row4">
                        <button onClick={(e) => this.props.handleClick(e.target.name) } name="1">1</button>
                        <button onClick={(e) => this.props.handleClick(e.target.name) } name="2">2</button>
                        <button onClick={(e) => this.props.handleClick(e.target.name) } name="3">3</button>
                        <button onClick={(e) => this.props.handleClick(e.target.name) } name="-">-</button>
                    </div>
                    <br />
                    <div className="row5">
                        <button onClick={(e) => this.props.handleClick(e.target.name) } name="0">0</button>
                        <button onClick={(e) => this.props.handleClick(e.target.name) } name=".">.</button>
                        <button onClick={(e) => this.props.handleClick(e.target.name) } name="00">00</button>
                        <button onClick={(e) => this.props.handleClick(e.target.name) } name="enter">Enter</button>
                    </div>
                </div>
            </div>
        )
    }


}