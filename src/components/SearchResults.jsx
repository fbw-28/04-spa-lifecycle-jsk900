import React, { Component } from 'react';
import User from './User';

export default class SearchResults extends Component {
  state = {
    users: [],
    originalUsers: [],
  };

  fetchData = async () => {
    try {
      let data = await fetch('https://jsonplaceholder.typicode.com/users');
      let resultData = await data.json();
      this.setState({ users: resultData });
      this.setState({ originalUsers: resultData });
    } catch (err) {
      console.log(err);
    }
  };

  //   shouldComponentUpdate(nextProps, nextState) {
  //     if (
  //       nextProps.searchValue !== '' &&
  //       nextProps.searchValue === nextProps.lastSearchTerm
  //     ) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   }

  static getDerivedStateFromProps(props, state) {
    if (props.searchValue !== '') {
      state.users = state.users.filter((user) =>
        user.name.startsWith(props.searchValue)
      );
    } else {
      state.users = state.originalUsers;
    }
    return state.users;
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const USER_DATA = this.state.users.map((user) => (
      <User key={user.id} id={user.id} name={user.name} email={user.email} />
    ));

    return (
      <table>
        <thead>
          <tr>
            <th align='justify'>User ID</th>
            <th align='justify'>User Name</th>
            <th align='justify'>User Email</th>
          </tr>
        </thead>
        <tbody>{USER_DATA}</tbody>
      </table>
    );
  }
}
