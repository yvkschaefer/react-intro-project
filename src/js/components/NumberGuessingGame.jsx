var React = require('react');

var NumberGuessingGame = React.createClass({
    getInitialState: function() {
        return {
            gameStatus: 'playing',
            remainingGuesses: 5,
            guesses: [],
            numberToGuess: Math.floor(Math.random() * 100),
        };
    },
    _startGame: function() {
        this.setState({
            gameStatus: 'playing',
            remainingGuesses: 5,
            guesses: [],
            numberToGuess: Math.floor(Math.random() * 100),
        });
    },
    _checkGuess: function() {
        var newArr = [].concat(this.state.guesses);

        var state = {
            guesses: newArr
        };
        var userGuess = Number(this.refs.theInput.value);
        var numberToGuess = this.state.numberToGuess;
        if (this.state.remainingGuesses > 1) {
            state.remainingGuesses = this.state.remainingGuesses - 1;
            state.guesses.push(userGuess);
            if (numberToGuess === userGuess) {
                state.gameStatus = 'win';
            }
            else if (numberToGuess < userGuess) {
                state.msg = 'lower';
            }
            else if (numberToGuess > userGuess) {
                state.msg = 'higher';
            }
        }
        else {
            state.gameStatus = 'lose';
        }
        this.setState(state);
    },
    renderWinLose: function() {
        var gameStatus = this.state.gameStatus;
        var gameStatusText;
        var loserMessage;
        
        if(gameStatus === 'win') {
            gameStatusText = 'YOU WIN';
            loserMessage = null;
        }
        else if(gameStatus === 'lose') {
            gameStatusText = 'YOU LOSE';
            loserMessage = 'the number was ' + this.state.numberToGuess;
        }
        return (
            <div>
                <h3>{gameStatusText}</h3>
                <h4 id="message">{loserMessage}</h4>
                <button onClick={this._startGame}>START GAME</button>
            </div>
        );
    },
    renderPlayingStatus: function() {
        return (
            <div>
                <h3>guess a number between 1 and 100</h3>
                <h3>remaining tries: {this.state.remainingGuesses}</h3>
                <input ref="theInput" type="text"/>
                <button onClick={this._checkGuess}>GUESS</button>
                <p>
                your guesses: {this.state.guesses.toString()}
                </p>
                <p>
                {this.state.msg}
                </p>
            </div>);
    },
    
    render: function() {
        if(this.state.gameStatus == 'playing') {
        return (<div>
            {this.renderPlayingStatus()}
        </div>);
        }
        else {
            return (<div>
            {this.renderWinLose()}            
            </div>);
        }
    }
});

module.exports = NumberGuessingGame;