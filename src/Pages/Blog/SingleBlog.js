import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const SingleBlog = () => {
    const {Id} = useParams();

    const [blog, setBlog] = useState([]);

     

    useEffect(() => {
        fetch(`http://localhost:5000/blog/${Id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setBlog(data)
        })
    }, [])

  return (
    <div className='container w-2/3 mx-auto py-4 mb-24'>
      <button className='py-4 px-12 text-white bg-black rounded-lg m-4'>
        <Link to='/blog'>Back</Link>
        </button>
      <div className=''> 
        <p className='text-start text-gray-400 mb-2'>Date: {blog.date}</p>
        <img src={blog.img} className='w-full rounded-lg' alt="" />
      </div>
      <div className="author text-gray-500 my-2 flex justify-between items-center">
        <p>author: {blog.email}</p>
       
      </div>
      <h2 className='font-bold text-4xl mb-4'>{blog.title}</h2>
      <h2>{blog.description}</h2>
    </div>
  )
}

export default SingleBlog
