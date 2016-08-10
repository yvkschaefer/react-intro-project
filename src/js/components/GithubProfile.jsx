var React = require('react');
var $ = require('jquery');

var GithubProfile = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired
    },
    getInitialState: function() {
        return {
            user: {}
        };
    },
    fetchData: function() {
        var url = `https://api.github.com/users/${this.props.username}?access_token=6d7ffda3c063706d6b19b0321903ee347f9c1d8b`;
        var that = this;

        $.getJSON(url).then(
            function(response) {
                that.setState({
                    user: response
                });
            });

    },
    componentDidMount: function(fetchData){
        this.fetchData();
    },
    componentDidUpdate: function(){
        if(this.fetchData.username !== this.props.username){
            this.fetchData();
        }
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

module.exports = GithubProfile;