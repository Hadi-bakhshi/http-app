import "./discussion.css";
import Comment from "../../Components/Comment/Comment";
import FullComment from "../../Components/FullComment/FullComment";
import NewComment from "../../Components/NewComment/NewComment";
import { useEffect, useState } from "react";
import axios from "axios";

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3001/comments"
        );
        setComments(data.slice(0, 4));
      } catch (error) {
        console.log(error);
      }
    };
    getComments();
  }, []);

  const selectCommentHandler = (id) => {
    setSelectedId(id);
  }

  return (
    <main>
      <section>
        {comments ? (
          comments.map((c) => (
            <Comment
              key={c.id}
              name={c.name}
              email={c.email}
              onClick={() => selectCommentHandler(c.id)}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </section>
      <section>
        <FullComment commentId={selectedId} />
      </section>
      <section>
        <NewComment />
      </section>
    </main>
  );
};

export default Discussion;
