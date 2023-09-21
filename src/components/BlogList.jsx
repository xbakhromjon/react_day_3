import React from 'react';

function BlogList(props) {
    const blogs = props.blogs;
    const deleteBlogHandler = props.deleteBlogHandler;

    return (
        <div>
            <h1>Blogs</h1> 
            {blogs.map((blog) => (
                <div key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <button onClick={deleteBlogHandler(blog.id)}>delete</button>
                </div>
            ))}       
        </div>
    );
}

export default BlogList;