var React = require('react');

var GuessTheNumber = React.createClass({
    propTypes: {
      numberToGuess: React.PropTypes.number.isRequired  
    },
    render: function(){
        return (
            <main>
                <h3>Can you guess the number? Type a guess, click, and see</h3>
                <input type="text" ref="userGuess" />
                <button onClick={this._handleButtonClick}>was I right?</button>
            </main>
        );
    },
    _handleButtonClick: function(){
      console.log("Number to guess", this.props.numberToGuess);
      if(this.refs.userGuess.value < this.props.numberToGuess){
          alert('Try Higher!');
      } 
      else if(this.refs.userGuess.value > this.props.numberToGuess){
          alert('Try Lower!');
      }
      else {
          alert('You are correct!');
      }
    }
});

module.exports = GuessTheNumber;