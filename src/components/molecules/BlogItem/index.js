import React from "react";
import { RegisterBg } from "../../../assets";
import "./blogitem.scss";
import { Button, Gap } from "../../atoms";
import { useHistory } from "react-router-dom";

const BlogItem = () => {
  const history = useHistory();
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
          aspernatur debitis amet eius quo magnam provident et magnam. Optio
          quaerat minima vitae labore voluptatem sunt corporis. Expedita vero
          totam in magnam. Rerum nulla ex quisquam modi amet ab quos. Sint
          aspernatur debitis amet eius quo magnam provident et magnam.
        </p>
        <Gap height={15} />
        <Button
          title="View Detail"
          onClick={() => history.push("/detail-blog")}
        />
      </div>
    </div>
  );
};

export default BlogItem;
