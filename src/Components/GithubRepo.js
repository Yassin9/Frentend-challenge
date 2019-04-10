import React, { Component } from "react";
import Octicon, { Alert } from "@githubprimer/octicons-react";
import GithubRepoList from "./GithubRepoList";
import Loading from "./Loading";
import { last30Days } from "../helper";

class GithubRepo extends Component {
  state = {
    pageId: 1, // pagination number
    perPage: 10, // Element per page
    items: [],
    isLoaded: false,
    isScrolled: true,
    hasError: false
  };

  componentDidMount() {
    this.loadData();
    window.addEventListener("scroll", this.onScroll);
  }

  // load data when reach the end of the page which give infinit scroll efect
  onScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 50 &&
      this.state.isScrolled
    ) {
      this.setState({
        isScrolled: false,
        isLoaded: false
      });
      this.loadData();
    }
  };

  // load data from github api and add it to the state
  loadData = () => {
    const { perPage, pageId } = this.state;

    const endPoint = "https://api.github.com/search/repositories?q=",
      query = `created:>${last30Days}&sort=stars&order=desc&page=${pageId}&per_page=${perPage}`,
      url = endPoint + query;

    return fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`${res.statusText} (${res.status})`);
        return res.json();
      })
      .then(data => {
        this.setState({
          items: [...this.state.items, ...data.items],
          isLoaded: true,
          pageId: this.state.pageId + 1,
          isScrolled: true
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          hasError: true,
          isLoaded: true
        });
      });
  };

  render() {
    const { items, isLoaded, hasError } = this.state;
    const errorMessage = hasError ? (
      <p>
        <Octicon icon={Alert} /> Ooops! somthing whent whrong.
      </p>
    ) : (
      ""
    );

    return (
      <div className="wrapper">
        <h1>Github Repositories</h1>
        {errorMessage}

        {items.map(item => {
          return <GithubRepoList key={item.id} {...item} />;
        })}
        {!isLoaded ? <Loading /> : ""}
      </div>
    );
  }
}

export default GithubRepo;
