import "./comments.css";
import Comment from "./Comment/Comment";
import { useEffect, useState } from "react";
import { getAllComments } from "../../services/getAllCommentsService";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Comments = () => {
  const [comments, setComments] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await getAllComments();
        setComments(data);
      } catch (error) {
        // console.log(error);
        setError(true);
        // you should get the error message from the backend
      }
    };
    getComments();
  }, []);



  

  const renderComments = () => {
    // first it tries to load the comments from the backend
    let renderedComments = <p> Loading ...</p>;
    // then if there are some error show the error message
    if (error) {
      renderedComments = <p> fetching data failed </p>;
      toast.error("There is an error");
    }

    // if everything is fine then render the comments
    if (comments && !error) {
      renderedComments = comments.map((c) => (
        <Link to={`/comments/${c.id}`} key={c.id}>
          <Comment
            name={c.name}
            email={c.email}
          />
        </Link>
      ));
    }
    return renderedComments;
  };

  return <section className="cmSection">{renderComments()}</section>;
};

export default Comments;

// json-server --watch db.json --port 3001
