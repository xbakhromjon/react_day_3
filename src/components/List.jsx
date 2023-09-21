import { useState } from "react";
import BlogList from "./BlogList";

function List() {
  const [blogs, setBlogs] = useState([
    { title: "Blog 1", body: "Body 1", author: "Bakhromjon", id: "1" },
    { title: "Blog 2", body: "Body 2", author: "Bakhromjon", id: "2" },
    { title: "Blog 3", body: "Body 3", author: "Bakhromjon", id: "3" },
  ]);

  const deleteBlogHandler = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id != id);
    setBlogs(newBlogs);
  };

  return (
    <div>
      <h1>List</h1>
      <BlogList blogs={blogs} deleteBlogHandler={deleteBlogHandler} />
    </div>
  );
}

export default List;
