import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({blog}) => {
    console.log(blog)
    const { _id, title, img, description, date, email} = blog;
  return (
    <div className="single-blog">
      <div className="blog-img">
        <img src={img} className="w-72 h-64 rounded" alt="" />
      </div>
      <div className="blog-desc pt-5 px-3 pb-3 bg-white shadow">
        <p className="mt-6">
          <span>Author:  {email} </span> 
        </p>
        <p><span>Date: {date}</span></p>
        <Link to={`${_id}`}> 
          <h4 className="text-2xl hover:text-primary text-black font-bold">{title}</h4>
        </Link>
        <Link to={`${_id}`}>
            <button className="btn btn-text text-success">Read More</button>
        </Link>
        
      </div>
    </div>
  );
};

export default BlogCard;
