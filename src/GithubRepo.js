import React, { Component } from "react";
import Moment from "moment";
import GithubRepoList from "./GithubRepoList";

// subtract 30 days from date
const last30Days = Moment()
  .subtract(30, "days")
  .format("YYYY-MM-DD");
class GithubRepo extends Component {
  constructor() {
    super();
    this.state = {
      pageId: 1, // page number
      perPage: 10, // element per page
      items: [],
      isLoaded: false,
      isScrolled: true
    };
  }

  componentDidMount() {
    this.getRepositories();
    window.addEventListener("scroll", this.onScroll);
  }

  // load data when reach the end of the page
  onScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 50 &&
      this.state.isScrolled
    ) {
      this.setState({ isScrolled: false });
      this.getRepositories();
    }
  };

  // load data from github api and add it to the state
  getRepositories = () => {
    const { perPage, pageId } = this.state;
    fetch(
      `https://api.github.com/search/repositories?q=created:>${last30Days}&sort=stars&order=desc&page=${pageId}&per_page=${perPage}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          items: [...this.state.items, ...data.items],
          isLoaded: true,
          pageId: this.state.pageId + 1,
          isScrolled: true
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
      </div>
    );
  }
}

export default GithubRepo;
