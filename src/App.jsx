import React, { Component } from 'react';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import About from './components/About';

import './App.css';

export default class App extends Component {
  state = {
    searchTerm: '',
    lastSearchTerm: '',
    searchValue: '',
    navigation: 'search',
  };

  handleNavigationClick = (e) => {
    if (e.target.name === 'search') {
      this.setState({ navigation: 'search' });
    } else if (e.target.name === 'about') {
      this.setState({ navigation: 'about' });
    }
  };

  render() {
    return (
      <main>
        <Header navigation={this.handleNavigationClick} />
        {this.state.navigation === 'search' ? (
          <div>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type='text'
                placeholder='Enter your search text'
                onChange={(e) => this.setState({ searchTerm: e.target.value })}
                value={this.state.searchTerm}
              />
              <button
                className='search'
                onClick={() =>
                  this.setState({
                    searchValue: this.state.searchTerm,
                    lastSearchTerm: this.state.searchTerm,
                  })
                }>
                Search
              </button>
            </form>
            <SearchResults
              searchValue={this.state.searchValue}
              lastSearchTerm={this.state.lastSearchTerm}
            />
          </div>
        ) : (
          <About />
        )}
      </main>
    );
  }
}
