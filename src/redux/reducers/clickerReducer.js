import { SET_DECREMENT, SET_INCREMENT , SET_RESET } from "../actions/clickerAction"

const initialState = {count:0} 

function reducer(state = initialState, action) {
  console.log("reducer", state, action);

  switch (action.type) {
    case SET_INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case SET_DECREMENT:
      return {
        count: state.count - 1,
      };

    case SET_RESET:
      return {
        count: 0,
      };
      
    default:
      return state;
  }
}

export default reducer
