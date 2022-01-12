import http from "../../services/httpService";
import { useEffect, useState } from "react";
import "./fullcomment.css";
const FullComment = ({ commentId, setComments,setSelectedId }) => {
  const [comment, setComment] = useState(null);
  useEffect(() => {
    if (commentId) {
      http
        .get(`/comments/${commentId}`)
        .then((resp) => setComment(resp.data))
        .catch((error) => console.log(error));
    }
  }, [commentId]);

  const deletehandler = async () => {
    try {
      await http.delete(`/comments/${commentId}`);
      const { data } = await http.get("/comments");
      setComments(data);
      setSelectedId(null);
      setComment(null);
    } catch (error) {
      console.log(error);
    }
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
