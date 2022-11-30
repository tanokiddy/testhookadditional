import { ADD_USER } from "./action/constant";

export let initialStateUser = {
  user: [{ userName: "Kid" }, { userName: "Long" }],
};

export default (state = initialStateUser, action) => {
  switch (action.type) {
    case ADD_USER: {
      let cloneUser = [...state.user];
      cloneUser.push(action.user);
      return { ...state, user: cloneUser };
    }
    default:
      return { ...state };
  }
};
