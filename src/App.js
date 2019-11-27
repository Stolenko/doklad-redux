import React from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from './actions';

class App extends React.Component {
  render () {
    const {counter} = this.props;
    return (
        <div>
          <button onClick={this.props.increment}>INCREMENT
          </button>
          <p>{counter}</p>
          <button onClick={this.props.decrement}>DECREMENT</button>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment());
    },
    decrement: () => {
      dispatch(decrement());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
