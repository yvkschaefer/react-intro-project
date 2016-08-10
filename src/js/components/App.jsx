var React = require('react');


var ImageCaption = require('./ImageCaption.jsx');
var Layout = require('./Layout.jsx');
var GuessTheNumber = require('./GuessTheNumber.jsx');
var YouClicked = require('./YouClicked.jsx');
var CharacterCounter = require('./CharacterCounter');
var CharacterLimit = require('./CharacterLimit');
var NumberGuessingGame = require('./NumberGuessingGame');
var GitHubProfile = require('./GitHubProfile');

var imageList = [{
  id: 42,
  source: "https://placekitten.com/g/210/210",
  text: "Hello kittenz!"
}, {
  id: 43,
  source: "https://facebook.github.io/react/img/logo.svg",
  text: "React Logo"
}, {
  id: 44,
  source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif",
  text: "Mind Blown!"
}];

var App = React.createClass({
  
  render: function() {
    
    return (
      <main>
        <h1>My first React App</h1>
        <hr/>
        <h2>GitHubProfile</h2>
        <GitHubProfile username="yvkschaefer"></GitHubProfile>
        <hr/>
        <h2>Number Guessing Game</h2>
        <NumberGuessingGame/>
        <hr/>
        <h2>Character Limit</h2>
        <CharacterLimit limit={140}></CharacterLimit>
        <hr/>
        <h2>Character Counter</h2>
        <CharacterCounter/>
        <hr/>
        <h2>You Clicked</h2>
        <YouClicked></YouClicked>
        <hr/>
        <h2>Guess The Number</h2>
        <GuessTheNumber numberToGuess={Math.floor(Math.random()*100)}></GuessTheNumber>
        <hr/>
        <h2>testing Arrays</h2>
        <div>
          {imageList.map(this.renderImage)}
        </div>
        <hr/>
        <h2>testing layout</h2>
        <Layout>
        <h2>About Us</h2>
        <p>We are <a href="https://facebook.github.io/react/">React</a> developers!</p>
        </Layout>
        <hr/>
      </main>
    );
  },
  renderImage: function(item) {
    return (
      <ImageCaption source={item.source} text={item.text} key={item.id}/>
    );
  }
});


module.exports = App;