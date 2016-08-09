var React = require('react');

var CharacterCounter = React.createClass({
    getInitialState: function(){
        return {
            currentInput: 0
        };
    },
    _handleInput: function(event){
    var value = event.target.value;
        this.setState({
            currentInput: value.length
        });
    },
    render: function(){
        return(
            <div>
                <input type="text" onInput={this._handleInput}/>
                <h3>Character Counter: </h3>
                {this.state.currentInput}
            </div>
        );
    }
});

module.exports = CharacterCounter;