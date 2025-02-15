import React from "react";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/404.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  if (error?.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="Page Not Found" />
          <h3>Ohh !</h3>
          <p>We can't seem to find the page you are looking for.</p>
          <Link to="/">Back Home</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <h3>Something went wrong</h3>
        <p>Please try again later.</p>
        <Link to="/">Back Home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
