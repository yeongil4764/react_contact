const ADD_COUNT = "ADD_COUNT";

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return applyAddCount(state, action);

    default:
      return state;
  }
};

const addCount = () => {
  return {
    type: ADD_COUNT,
  };
};

const applyAddCount = (state, action) => {
  const { count: prevCount } = state;

  return {
    ...state,
    count: prevCount + 1,
  };
};

export default reducer;
export const actionCreators = {
  addCount,
};
