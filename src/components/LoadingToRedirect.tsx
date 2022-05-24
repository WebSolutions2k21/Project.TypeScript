// import { paths } from "config/paths";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "./Loader";

const LoadingToRedirect = (path: any) => {
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => currentCount - 1);
    }, 1000);

    count === 0 && navigate(path);
    return () => clearInterval(interval);
  }, [count, navigate, path]);

  return <Loader />;
};

export default LoadingToRedirect;
