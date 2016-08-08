var React = require('react');
var ReactDOM = require('react-dom');

var ImageCaption = require('./ImageCaption.jsx');

var App = React.createClass({
  render: function() {
    return (
      <main>
        <h1>My first React App</h1>
        <hr/>
        <h2>testing ImageCaption</h2>
        <ImageCaption source="http://i.imgur.com/D8JWn.jpg" text="rainbow kitty -- so intenz!" />
        <hr/>
      </main>
    );
  }
});

ReactDOM.render(
    <ImageCaption/>,
    document.getElementById('app')
);

module.exports = App;