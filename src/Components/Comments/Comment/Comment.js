import "./comment.css";
const Comment = ({ name, email, onClick }) => {
  return (
    <div className="commentContainer" onClick={onClick}>
      <div>
        <span className="label">Name:</span>
        <p>{name}</p>
      </div>
      <div>
        <span className="label">Email:</span>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Comment;
