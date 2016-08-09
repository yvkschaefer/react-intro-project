var React = require('react');

var CharacterLimit = React.createClass({
    propTypes: {
        limit: React.PropTypes.number.isRequired
    },
    getInitialState: function() {
        return {
            currentInput: ''
        };
    },
    _handleInput: function() {
        var value = this.refs.theInput.value;
        if (value.length <= this.props.limit) {
            this.setState({
                currentInput: value
            });
        }
    },
    render: function() {
        return (
            <div>
                <input id="characterLimitInput" ref="theInput" type="text" value={this.state.currentInput} onInput={this._handleInput} />
                <h4>{this.props.limit - this.state.currentInput.length} characters remaining</h4>
            </div>
        );
    }
});


module.exports = CharacterLimit;