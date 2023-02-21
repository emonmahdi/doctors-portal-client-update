import React from "react";
import { useQuery } from "react-query";
import blog1 from "../../assets/images/operation-1.jpg";
import blog2 from "../../assets/images/operation-2.jpg";
import blog3 from "../../assets/images/operation-3.jpg";
import Footer from "../Shared/Footer";
import Loading from "../Shared/Loading";
import Navbar from "../Shared/Navbar/Navbar";
import "./blog.css";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const {
    data: blogs,
    isLoading,
    refetch,
  } = useQuery("blogs", () =>
    fetch("http://localhost:5000/blog", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
    <Navbar />
    <div className="">
      <div id="blog-section" className="mb-12">
        <div className="container">
          <div className="blog-sec-title text-center">
            <h6 className="text-dark text-3xl font-bold">
              Latest Blog and News
            </h6>
            <h2 className="my-3">
              What's our customer said About our hospitality
            </h2>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {
                blogs.map(blog => <BlogCard
                blog={blog}
                key={blog._id}
                ></BlogCard>)
            }
             
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default Blogs;
