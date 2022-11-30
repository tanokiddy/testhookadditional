import { PLUS_LIKE } from "./action/constant";

export let initialStateLike = {
  like: 1,
};

export default (state = initialStateLike, action) => {
  switch (action.type) {
    case PLUS_LIKE: {
      state.like++;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
