import PropTypes from 'prop-types';
import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmarkAdd,handleReadingTime}) => {
    const [blogs,setBlogs]=useState([]);

useEffect(()=>{
fetch('blogs.json')
.then(res=>res.json())
.then(data=>setBlogs(data))
},[])

    return (
        <header className="w-2/3 mt-4">
           <h1 className="text-3xl mb-8">Blogs: {blogs.length}</h1> 
           {
            blogs.map((blog)=> <Blog key={blog.id} blog={blog} handleBookmarkAdd={handleBookmarkAdd} handleReadingTime={handleReadingTime}></Blog>)
           }
        </header>
    );
};

Blogs.propTypes={
   
    handleBookmarkAdd:PropTypes.func.isRequired,
    handleReadingTime:PropTypes.func
}

export default Blogs;