import React from "react";
import "./home.scss";
import { Button, BlogItem } from "../../components";

const Home = () => {
  return (
    <div className="main-app-wrapper ">
      <div className="create-wrapper">
        <Button title="create blog" />
      </div>
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <p>pagination</p>
    </div>
  );
};

export default Home;
