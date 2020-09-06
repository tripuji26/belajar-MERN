import React from "react";
import { RegisterBg } from "../../../assets";
import "./blogitem.scss";

const BlogItem = () => {
  return (
    <div className="blgo-item">
      <img className="image-thumb" src={RegisterBg} alt="post" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author - Date</p>
        <p className="body">
          Optio quaerat minima vitae labore voluptatem sunt corporis. Expedita
          vero totam in magnam. Rerum nulla ex quisquam modi amet ab quos. Sint
          aspernatur debitis amet eius quo magnam provident et magnam. Optio
          quaerat minima vitae labore voluptatem sunt corporis. Expedita vero
          totam in magnam. Rerum nulla ex quisquam modi amet ab quos. Sint
          aspernatur debitis amet eius quo magnam provident et magnam.
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
