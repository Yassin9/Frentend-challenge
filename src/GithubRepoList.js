/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import Moment from "moment";
import Octicon, { Star, IssueOpened } from "@githubprimer/octicons-react";
import { numberFormat } from "./helper";

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
        target="_blank"
      />
      <div className="detail-list">
        <h2>{name}</h2>
        <p>{description}</p>
        <div>
          <a href="#" className="detail-count btn">
            <Octicon icon={Star} />
            Stars: {numberFormat(stargazers_count)}
          </a>
          <a
            href={`https://github.com/${owner.login}/${name}/issues`}
            className="detail-count btn"
            target="_blank"
          >
            <Octicon icon={IssueOpened} />
            Issues: {numberFormat(open_issues_count)}
          </a>
          <em className="detail-date">
            Submitted {Moment(created_at).fromNow()} by {owner.login}
          </em>
        </div>
      </div>
    </div>
  );
};

export default GithubRepoList;
