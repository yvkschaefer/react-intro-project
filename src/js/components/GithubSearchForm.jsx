var React = require('react');

var GithubSearchForm = React.createClass({
    propTypes: {
    onSearch: React.PropTypes.func.isRequired
  },
  _handleSubmit: function(e){
        e.preventDefault();
        this.props.onSearch(this.refs.userInput.value);
  },
  render: function() {
    return (
      <form id="githubSearchForm" onSubmit={this._handleSubmit}>
        <p>Enter a GitHub username:</p>
        <input ref="userInput" />
        <button>Go!</button>
      </form>
    );
  }
});

module.exports = GithubSearchForm;