import React, { Component } from "react";
import Moment from "moment";
import GithubRepoList from "./GithubRepoList";

const last30Days = Moment()
  .subtract(30, "days")
  .format("YYYY-MM-DD");
class GithubRepo extends Component {
  constructor() {
    super();
    this.state = {
      perPage: 10,
      items: [],
      isLoaded: false
    };
  }

  componentWillMount() {
    this.getRepositories();
  }

  getRepositories = () => {
    const { perPage } = this.state;
    fetch(
      `https://api.github.com/search/repositories?q=created:>${last30Days}&sort=stars&order=desc&per_page=${perPage}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          items: data.items,
          isLoaded: true
        });
      });
  };

  render() {
    const { isLoaded, items } = this.state;
    if (!isLoaded) return <h3>Loading...</h3>;
    return (
      <div className="wrapper">
        {items.map(item => {
          return <GithubRepoList key={item.id} {...item} />;
        })}

        <button onClick={this.loadMore}>Load More</button>
      </div>
    );
  }
}

export default GithubRepo;
