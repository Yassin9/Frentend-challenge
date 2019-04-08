import React, { Component } from "react";
import Moment from "moment";

class GithubRepoList extends Component {
  render() {
    const {
      name,
      created_at,
      owner,
      stargazers_count,
      description,
      open_issues_count
    } = this.props;
    return (
      <div className="wrap-list">
        <img src={owner.avatar_url} alt="" />
        <div className="detail-list">
          <h2>{name}</h2>
          <p>{description}</p>
          <div>
            <span className="detail-count">Stars {stargazers_count}</span>
            <span className="detail-count">Issues {open_issues_count}</span>
            <span className="detail-date">
              Submitted {Moment(created_at).fromNow()} by {owner.login}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default GithubRepoList;
