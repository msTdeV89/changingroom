import * as actions from "../actions/actionTypes";

const initialState = {
  menuIsOpen: false,
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.HANDLE_MENU:
      return { ...state, menuIsOpen: !state.menuIsOpen };
    default:
      return state;
  }
};

export default globalReducer;
