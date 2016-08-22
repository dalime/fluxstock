import React, { Component } from 'react';

export default class SymbolSearch extends Component {
  constructor() {
    super();

    this.state = {
      searchText: "",
      search: ""
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.search = this.search.bind(this);
  }

  onInputChange(e) {
    this.setState({searchText: e.target.value});
  }

  search(e) {
    e.preventDefault();
    this.setState({search: this.state.searchText});
  }

  render() {
    return (
      <div>
        <h1>Search a symbol.</h1>
        <h6>Please search a symbol below.</h6>
        <form>
          <input type="text" onChange={this.onInputChange}/>
          <button onClick={this.search}>Search</button>
        </form>
      </div>
    )
  }
}
