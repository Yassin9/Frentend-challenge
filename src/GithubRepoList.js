/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import Moment from "moment";

const GithubRepoList = props => {
  const {
    name,
    created_at,
    owner,
    stargazers_count,
    description,
    open_issues_count,
    html_url
  } = props;
  return (
    <div className="wrap-list">
      <a
        href={html_url}
        className="wrap-img"
        style={{ backgroundImage: `url(${owner.avatar_url})` }}
        alt="repo"
        target="_blank"
        rel="noopener noreferrer"
      />
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
};

export default GithubRepoList;
