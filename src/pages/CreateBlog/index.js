import React from "react";
import "./createBlog.scss";
import { Input, Button, Upload, TextArea, Gap } from "../../components";

const CreateBlog = () => {
  return (
    <div className="blog-post">
      <p className="title">Create New Blog Post</p>
      <Input label="Post Title" />
      <Upload />
      <TextArea />
      <Gap height={15} />
      <div className="button-action">
        <Button title="Save" />
      </div>
    </div>
  );
};

export default CreateBlog;
