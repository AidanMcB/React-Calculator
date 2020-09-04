import React from 'react'

export default class Screen extends React.Component {

    render() {
        return (
            <div className="display-container">
                <div className="display"
                maxLength="15">
                    {this.props.display}
                </div>
            </div>

        )
    }
}