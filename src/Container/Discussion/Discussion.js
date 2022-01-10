import "./discussion.css";
import Comment from "../../Components/Comment/Comment";
import FullComment from "../../Components/FullComment/FullComment";
import NewComment from "../../Components/NewComment/NewComment";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/comments");
        setComments(data);
      } catch (error) {
        // console.log(error);
        setError(true);
        // you should get the error message from the backend
      }
    };
    getComments();
  }, []);

  const selectCommentHandler = (id) => {
    setSelectedId(id);
  };

  const postCommentHandler = (comment) => {
    axios
      .post("http://localhost:3001/comments", {
        ...comment,
        postId: 100,
      })
      .then((res) => axios.get("http://localhost:3001/comments"))
      .then((res) => setComments(res.data))
      .catch((error) => console.log(error));
  };

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
        <Comment
          key={c.id}
          name={c.name}
          email={c.email}
          onClick={() => selectCommentHandler(c.id)}
        />
      ));
    }
    return renderedComments;
  };

  return (
    <main>
      <section>{renderComments()}</section>
      <section>
        <FullComment setComments={setComments} commentId={selectedId} />
      </section>
      <section>
        <NewComment onAddPost={postCommentHandler} />
      </section>
    </main>
  );
};

export default Discussion;

// json-server --watch db.json --port 3001
