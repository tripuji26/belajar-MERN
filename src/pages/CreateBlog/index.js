import React from "react";
import "./createBlog.scss";
import { Input, Button, Upload, TextArea, Gap } from "../../components";

import { useHistory } from "react-router-dom";

const CreateBlog = () => {
  const history = useHistory();
  return (
    <div className="blog-post">
      <div className="button-action">
        <Button title="Kembali" onClick={() => history.push("/")} />
      </div>
      <p className="title">Create New Blog Post</p>
      <Input label="Post Title" />
      <Upload />
      <TextArea />
      <Gap height={30} />
      <div className="button-action">
        <Button title="Save" />
      </div>
      <Gap height={15} />
    </div>
  );
};

export default CreateBlog;
