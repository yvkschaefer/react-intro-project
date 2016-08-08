var React = require('react');
var ReactDOM = require('react-dom');

var ImageCaption = require('./ImageCaption.jsx');

var App = React.createClass({
  render: function() {
    return (
      <main>
        <h1>My first React App</h1>
        <hr/>
        <ImageCaption source="http://placekitten.com/g/210/210" text="This is a kittenz!" />
      </main>
    );
  }
});

ReactDOM.render(
    <ImageCaption/>,
    document.getElementById('app')
);

module.exports = App;