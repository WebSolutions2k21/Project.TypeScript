import React from "react";
import { BallTriangle } from "react-loader-spinner";
import { Loading } from "./Loader.style";

export const Loader = () => {
  return (
    <Loading>
      <BallTriangle color="#174C6F" />
    </Loading>
  );
};
