import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';


class App extends Component {

  handleOnClick() {
    this.props.store.dispatch({
      type: 'INCREASE_COUNT',
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick()}>
          Click
        </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

//mapStateToProps
// (1) a function that listens to every change in the store and
// (2) filters out the changes relevant to a particular component
// (3) provide to that component

const mapStateToProps = (state) => {
  return { items: state.items }
}

export default connect(mapStateToProps)(App);
