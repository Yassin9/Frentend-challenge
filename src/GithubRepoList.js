import React, { Component } from 'react';
import Moment from 'moment';

class GithubRepoList extends Component {
  render() {
    const { name, created_at, owner, stargazers_count, description, open_issues_count } = this.props;
    return (
      <div className="github-list">
        <img src={owner.avatar_url} alt="" />
        <h2>{name}</h2>
        <p>{description}</p>
        <button>Stars {stargazers_count}</button>
        <button>Issues {open_issues_count}</button>
        <span>{Moment(created_at).fromNow()} by {owner.login}</span>
      </div>
    );
  }
}

export default GithubRepoList;
