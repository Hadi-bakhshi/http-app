import { useEffect, useState } from "react";
import "./fullcomment.css";
import { getAllComments } from "../../services/getAllCommentsService";
import { deleteComment } from "../../services/deleteCommentService";
import { getOneComment } from "../../services/getOneCommentService";

const FullComment = ({ commentId, setComments, setSelectedId }) => {
  const [comment, setComment] = useState(null);
  useEffect(() => {
    if (commentId) {
      getOneComment(commentId)
        .then((resp) => setComment(resp.data))
        .catch((error) => console.log(error));
    }
  }, [commentId]);

  const deletehandler = async () => {
    try {
      await deleteComment(commentId);
      const { data } = await getAllComments();
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
