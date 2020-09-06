import React from "react";
import { RegisterBg } from "../../assets";
import "./detailBlog.scss";

const DetailBlog = () => {
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={RegisterBg} alt="thumb" />
      <p className="blog-title">Title Blog</p>
      <p className="blog-author">Author - Date</p>
      <p className="blog-body">
        Quaerat omnis voluptas sit error doloribus voluptatum. Repellendus
        doloribus excepturi corrupti et non. Dolorem quia sunt ea rerum magnam
        omnis optio qui ipsa. Et rerum rerum maxime aut ut dicta. Expedita
        accusantium voluptates. Temporibus illum modi omnis praesentium nihil.
        Dolores eaque unde ea tempora. Maxime fuga enim eum dolorum tempora nisi
        similique est iste. Modi dolor fugit ipsam. Quisquam sequi deserunt aut
        tempore ratione. Et commodi consequatur vero velit esse. Eos enim rerum
        distinctio. Tenetur exercitationem voluptas sunt laudantium placeat
        officia animi laudantium error. Tenetur in voluptatum non nisi. Et quam
        reiciendis nesciunt. Nostrum voluptatum voluptatem occaecati libero
        rerum id aut molestiae.
      </p>
      <p></p>
    </div>
  );
};

export default DetailBlog;
