
import { useState } from "react";
import "./newcomment.css";
const NewComment = ({onAddPost}) => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    content: "",
  });
  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
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
      <button onClick={() => onAddPost(comment)}>Add New Comment</button>
    </div>
  );
};

export default NewComment;
