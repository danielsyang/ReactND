import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavigationComponent from './component/navigation/NavigationComponent';
import CategoryComponent from './component/categories/CategoryComponent';
import { fetchCategories } from './actions/CategoryAction';

class App extends Component {
  componentWillMount() {
    this.props.loadCategories();
  }
  render() {
    return (
      <div>
        <NavigationComponent />
        <CategoryComponent />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadCategories: () => dispatch(fetchCategories()),
  };
}

function mapStateToProps(initial) {
  return {
    categories: initial,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(App);
