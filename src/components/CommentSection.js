import video from "../data/video";

function Comments(){

    return (
        <div>
            <h2>{video.comments.length}</h2>
            <div>
                {video.comments.map(comment => {
                    return (
                        <div>
                            <h3>{comment.user}</h3>
                            <p>{comment.comment}</p>
                        </div>
                    )
                }) }
            </div>
        </div>
    )
}

export default Comments;