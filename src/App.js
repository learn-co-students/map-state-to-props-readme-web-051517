import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {

  handleOnClick = ()=> {
    this.props.store.dispatch({
      type: 'INCREASE_COUNT',
    });
  }

  render() {
    console.log('from App.render()',this.props)
    return (
      <div className="App">
        <button onClick={this.handleOnClick}>
          Click
        </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {items: state.items}
}

export default connect(mapStateToProps)(App);
