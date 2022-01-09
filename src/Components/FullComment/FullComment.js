import axios from "axios";
import { useEffect, useState } from "react";
import "./fullcomment.css";
const FullComment = ({ commentId }) => {
  const [comment, setComment] = useState(null);
  useEffect(() => {
    if (commentId) {
      axios
        .get(`http://localhost:3001/comments/${commentId}`)
        .then((resp) => setComment(resp.data))
        .catch((error) => console.log(error));
    }
  }, [commentId]);
  const deletehandler = () => {
    axios
      .delete(`http://localhost:3001/comments/${commentId}`)
      .then((resp) => console.log(resp))
      .catch((error) => console.log(error));
  };

  let commentDetail = <p>Please Select a comment !</p>;
  if (commentId) commentDetail = <p>Loading...</p>;

  if (comment) {
    commentDetail = (
      <div className="fcContainer">
        <p>{comment.name}</p>
        <p>{comment.email}</p>
        <p>{comment.body}</p>
        <button onClick={deletehandler}>Delete</button>
      </div>
    );
  }

  return commentDetail;
};

export default FullComment;
