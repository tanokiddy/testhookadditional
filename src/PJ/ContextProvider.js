import React from "react";
import { useReducer } from "react";
import handleReducer, { initialStateLike } from "../redux/handleReducer";
import userNewReducer, { initialStateUserNew } from "../redux/userNewReducer";
import userReducer, { initialStateUser } from "../redux/userReducer";

export const context = React.createContext();

export default function ContextProvider(props) {
  let [like, dispatchLike] = useReducer(handleReducer, initialStateLike);
  let [user, dispatchUser] = useReducer(userReducer, initialStateUser);
  let [userNew, dispatchUserNew] = useReducer(
    userNewReducer,
    initialStateUserNew
  );

  const store = {
    likeReducer: [like, dispatchLike],
    userReducer: [user, dispatchUser],
    userNewReducer: [userNew, dispatchUserNew],
  };
  return <context.Provider value={store}>{props.children}</context.Provider>;
}
