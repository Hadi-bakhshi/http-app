import { useEffect, useState } from "react";
import "./fullcomment.css";
import { deleteComment } from "../../services/deleteCommentService";
import { getOneComment } from "../../services/getOneCommentService";
import { toast } from "react-toastify";

const FullComment = ({ match,history }) => {

  const [comment, setComment] = useState(null);
  const commentId = match.params.id;
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
      history.push("/");
      setComment(null);
      toast.success("Comment deleted successfully");
    } catch (error) {
      toast.error("Something went wrong");
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
