import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
const Blog = () => {
  const { id } = useParams();
  const history = useHistory();

  const {
    data: blog,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  const handleDelete = (e) => {
    try {
      fetch(`http://localhost:8000/blogs/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      }).then((res) => {
        console.log("response status", res.status);
        if (!res.ok) {
          console.log("response was not ok");
        } else {
          console.log("resp was ok");
        }
        history.push("/");
      });
    } catch (err) {
      console.log(err);
    }
  };
  return blog ? (
    <div>
      <h2>Title: {blog.title}</h2>
      <p>id: {blog.id}</p>
      <p>Author: {blog.author}</p>
      <p>body: {blog.body}</p>
      <div
        className="delete"
        style={{ textAlign: "center", marginTop: "15px" }}
        onClick={handleDelete}
      >
        <button>Delete</button>
      </div>
    </div>
  ) : (
    <div>Loading ...</div>
  );
};
export default Blog;
