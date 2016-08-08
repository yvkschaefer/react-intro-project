var React = require('react');

var ImageCaption = require('./ImageCaption.jsx');
var Layout = require('./Layout.jsx');

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