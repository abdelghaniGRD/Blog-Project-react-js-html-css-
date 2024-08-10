import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const BlogList = () => {
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <>
      {blogs ? (
        <div className="blog-list">
          <h2>{"All Blogs"}</h2>
          {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
              {/* <Link>hello</Link> */}
              <Link to={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading ...</div>
      )}
    </>
  );
};

export default BlogList;
