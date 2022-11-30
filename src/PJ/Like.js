import React, { useContext, memo } from "react";
import { PLUS_LIKE } from "../redux/action/constant";

import { context } from "./ContextProvider";

function Like() {
  console.log("Like");

  let { likeReducer } = useContext(context);
  let like = likeReducer[0].like;
  let dispatchLike = likeReducer[1];

  const handlePlusLike = () => {
    dispatchLike({
      type: PLUS_LIKE,
    });
  };

  return (
    <div className="mt-3">
      <button
        onClick={() => {
          handlePlusLike();
        }}
        className="btn btn-success"
      >
        + Like
      </button>
      <div>{like}</div>
    </div>
  );
}
export default memo(Like);
