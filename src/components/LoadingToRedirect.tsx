import { paths } from "config/paths";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoadingToRedirect = () => {
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => currentCount - 1);
    }, 1000);

    count === 0 && navigate(paths.login);
    return () => clearInterval(interval);
  }, [count, navigate]);

  return <div>Redirect you in {count}</div>;
};

export default LoadingToRedirect;
