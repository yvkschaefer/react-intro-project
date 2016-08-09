var React = require('react');

var CharacterLimit = React.createClass({
    propTypes: {
        limit: React.propTypes.number.isRequired
    },
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
                <input type="text" limit="userLimit" value="hello" onInput={this._handleInput}/>
                <h3>Character Counter: </h3>
                {this.state.currentInput}
            </div>
        );
    }
});

module.exports = CharacterLimit;