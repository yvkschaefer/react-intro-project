var React = require('react');



var YouClicked = React.createClass({
    getInitialState: function() {
        return {
            timesClicked: 0,
            timesReset: 0
        };
    },
    resetMessage: function(){
        var resetNumber = this.state.timesReset;
        if (resetNumber === 0) {
            return null;
        }
        else if (resetNumber === 1){
            return "You have reset " + resetNumber + " time";
        }
        else {
            return "You have reset " + resetNumber + " times";
        }
        },
    _handleButtonClick: function() {
        this.setState({
            timesClicked: this.state.timesClicked + 1
        });
    },
    _handleResetButton: function(){
        this.setState({
           timesClicked: 0,
           timesReset: this.state.timesReset + 1
        });
    },
    render: function() {
        var that = this;

        function renderMessage() {
            var message = that.state.timesClicked;
            if (message === 0) {
                return "You have not clicked the button";
            }
            else if (message === 1) {
                return "You have clicked the button once";
            }
            else if (message === 2) {
                return "You have clicked the button twice";
            }
            else {
                return "You have clicked the button " + that.state.timesClicked + " times";
            }
        }
        return (
            <div>
            <button onClick={this._handleButtonClick}>click!</button>
            <button onClick={this._handleResetButton}>reset</button>
            <p> {renderMessage()}
            </p>
            <p> {this.resetMessage()}
            </p>
            </div>
        );
    }
});

module.exports = YouClicked;