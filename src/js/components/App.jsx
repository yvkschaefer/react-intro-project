var React = require('react');
var ReactDOM = require('react-dom');

var ImageCaption = require('./ImageCaption.jsx');

var imageList = [{
  id: 42,
  source: "http://placekitten.com/g/210/210",
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
        <h2>testing Arrays</h2>
        <div>
          {imageList.map(this.renderImage)}
        </div>
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