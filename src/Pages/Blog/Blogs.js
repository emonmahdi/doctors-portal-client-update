import React from "react";
import { useQuery } from "react-query";
import blog1 from "../../assets/images/operation-1.jpg";
import blog2 from "../../assets/images/operation-2.jpg";
import blog3 from "../../assets/images/operation-3.jpg";
import Footer from "../Shared/Footer";
import Loading from "../Shared/Loading";
import "./blog.css";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const {
    data: blogs,
    isLoading,
    refetch,
  } = useQuery("blogs", () =>
    fetch("https://y-silk-zeta.vercel.app/blog", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className=" ">
      <div id="blog-section" className="mb-12">
        <div className="container">
          <div className="blog-sec-title text-center">
            <h6 className="text-success text-3xl font-bold">
              Latest blog and news {blogs?.length}{" "}
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
            
            {/* <div className="single-blog">
              <div className="blog-img">
                <img src={blog2} className="w-72 rounded h-64" alt="" />
              </div>
              <div className="blog-desc pt-5 px-3 pb-3 bg-white shadow">
                <p className="text-primary mt-6">Doctor news</p>
                <h4 className="text-2xl">
                  How often should I come in for a check-up
                </h4>
                <button className="btn btn-text text-success">Read More</button>
              </div>
            </div> */}
            {/* <div className="single-blog">
              <div className="blog-img">
                <img src={blog3} className="w-72 rounded h-64" alt="" />
              </div>
              <div className="blog-desc pt-5 px-3 pb-3 bg-white shadow">
                <p className="text-primary mt-6">Doctor news</p>
                <h4 className="text-2xl">
                  How often should I come in for a check-up
                </h4>
                <button className="btn btn-text text-success">Read More</button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
