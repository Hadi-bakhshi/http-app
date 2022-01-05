import './newcomment.css'
const NewComment = () => {
    return (
        <div className='ncContainer'>
            <div>
                <label>Name</label>
                <input type="text" />
            </div>
            <div>
                <label>Email</label>
                <input type="text" />
            </div>
            <div>
                <label>Body</label>
                <input type="textarea" />
            </div>
          
        </div>
    )
}

export default NewComment
