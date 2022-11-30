import { ADD_NEWUSER } from "./action/constant";

export const initialStateUserNew = {
  user: [{ userName: "KidNew" }, { userName: "LongNew" }],
};

export default (state = initialStateUserNew, action) => {
  switch (action.type) {
    case ADD_NEWUSER: {
      let cloneUser = [...state.user];
      cloneUser.push(action.user);
      return { ...state, user: cloneUser };
    }
    default:
      return { ...state };
  }
};
