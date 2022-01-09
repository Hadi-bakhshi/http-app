import axios from "axios";
import { useState } from "react";
import "./newcomment.css";
const NewComment = () => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    content: "",
  });
  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const postCommentHandler = () => {
    axios
      .post("http://localhost:3001/comments", {
        ...comment,
        postId: 100,
      })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="ncContainer">
      <div>
        <label>Name</label>
        <input type="text" onChange={changeHandler} name="name" />
      </div>
      <div>
        <label>Email</label>
        <input type="text" onChange={changeHandler} name="email"/>
      </div>
      <div>
        <label>Body</label>
        <textarea type="textarea" onChange={changeHandler} name="content" />
      </div>
      <button onClick={postCommentHandler}>Add New Comment</button>
    </div>
  );
};

export default NewComment;
