import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);

  const history = useHistory();

  const HandleOnSubmit = (e) => {
    e.preventDefault();

    setIsPending(true);

    const ClientData = { title, author, body };
    try {
      fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(ClientData),
      }).then((res) => {
        setIsPending(false);
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
  return (
    <div className="create">
      <form onSubmit={HandleOnSubmit}>
        <label>title</label>
        <input
          value={title}
          required
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <label>body</label>
        <textarea
          value={body}
          required
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>

        <select
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option>abdelghani</option>
          <option>mohamed</option>
        </select>
        {!isPending && <button type="submit">Submit</button>}
        {isPending && <button type="submit">Submiting...</button>}
      </form>
    </div>
  );
};

export default Create;
