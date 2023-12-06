import React, { Component } from "react";
import { connect } from "react-redux";
// state bilgisini tutmak için redux a bağlamamız lazım
// connect nesnesi bizim redux a bağlanmamızı sağlayacak

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { counter: state.counterReducer };
}

export default connect(mapStateToProps)(Counter);
