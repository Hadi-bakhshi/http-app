import axios from "axios";
import { useEffect, useState } from "react";
import "./fullcomment.css";
const FullComment = ({ commentId }) => {
  const [comment, setComment] = useState(null);
  useEffect(() => {
    if (commentId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
        .then((resp) => setComment(resp.data))
        .catch((error) => console.log(error));
    }
  }, [commentId]);

  let commentDetail = <p>Please Select a comment !</p>;
  if (commentId) commentDetail = <p>Loading...</p>;

  if (comment) {
    commentDetail = (
      <div className="fcContainer">
        <p>{comment.name}</p>
        <p>{comment.email}</p>
        <p>{comment.body}</p>
      </div>
     );
  }

  return commentDetail;
};

export default FullComment;
