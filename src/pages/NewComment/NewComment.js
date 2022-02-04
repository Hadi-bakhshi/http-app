
import { useState } from "react";
import { addNewComment } from "../../services/addNewCommentService";
import { toast } from "react-toastify";
import "./newcomment.css";
const NewComment = ({history}) => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    content: "",
  });
  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const postCommentHandler = async (comment) => {
    try {
      await addNewComment({ ...comment, postId: 10 });
      toast.success("Comment added successfully");
      history.push("/");
    } catch (error) {
      toast.error("Comment added successfully");
    }
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
      <button onClick={() => postCommentHandler(comment)}>Add New Comment</button>
    </div>
  );
};

export default NewComment;
