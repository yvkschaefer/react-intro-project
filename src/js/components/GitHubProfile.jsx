var React = require('react');
var $ = require('jquery');

var GitHubProfile = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired
    },
    getInitialState: function() {
        return {
            user: {}
        };
    },
    componentDidMount: function() {
        var url = `https://api.github.com/users/${this.props.username}`;
        var that = this;

        $.getJSON(url).then(
            function(response) {
                that.setState({
                    user: response
                });
            });

    },
    render: function() {
        if (!this.state.user) {
            return (<div>LOADING INFO...</div>);
        }
        var user = this.state.user;
        return (
            <div className="github-user">
                <img className="github-user__avatar" src={user.avatar_url} />
                <div className="github-user__info">
                    <p><strong>{user.login} ({user.name})</strong></p>
                    <p><strong>{user.bio}</strong></p>
                </div>
            </div>
        );
    }
});

module.exports = GitHubProfile;