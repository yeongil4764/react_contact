import React from "react";
import { connect } from "react-redux";
import { actionCreators as counterActions } from "../redux/modules/counter";

const mapStateToProps = (state) => {
  const {
    counter: { count },
  } = state;

  return {
    count,
  };
};

const mapDispatchToProps = (dispatch) => {
  const addCount = () => dispatch(counterActions.addCount());

  return {
    addCount,
  };
};

const Counter = (props) => {
  const { count, addCount } = props;

  const onClick = () => {
    addCount();
  };

  return (
    <div>
      counter
      <br />
      count: {count}
      <br />
      <button onClick={onClick}>Up</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
