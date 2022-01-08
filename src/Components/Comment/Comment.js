import './comment.css'
const Comment = ({name,email , onClick}) => {
    return (
        <div className="commentContainer" onClick={onClick}>
              <p>Name : {name}</p>         
              <p>Email : {email}</p>         
        </div>
    )
}

export default Comment
