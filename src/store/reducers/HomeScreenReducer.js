import { TEST } from "../../common/ActionTypes";

const INITIAL_STATE = {
  itemPrice: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TEST:
      return { ...state, itemPrice: action.newPrice };
    default:
      return state;
  }
}
