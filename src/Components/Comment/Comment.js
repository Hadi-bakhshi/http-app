import './comment.css'
const Comment = ({name,email}) => {
    return (
        <div className="commentContainer">
              <p>Name : {name}</p>         
              <p>Email : {email}</p>         
        </div>
    )
}

export default Comment
