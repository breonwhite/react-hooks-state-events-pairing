function VideoDetails(props) {

    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.views} Views | Uploaded {props.createdAt}</p>

        </div>
    )
}

export default VideoDetails;