import video from "../data/video.js";
import VideoDetails from "./VideoDetails.js";
import LikeButtons from "./LikeButtons.js";
import Comments from "./CommentSection.js";
import {useState} from 'react'

function App() {
  console.log("Here's your data:", video);

  const [showComments, setShowComments] = useState(false);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <VideoDetails title={video.title} views={video.views} createdAt={video.createdAt}/>
      <LikeButtons />
      <br></br>
      <div>
      <button onClick={() => setShowComments(!showComments)}>{showComments ? "Hide Comments" : "Show Comments"}</button>
      </div>
      <hr></hr>
      {showComments ? <Comments /> : ""}
      {/* Comment section would appear here */}
    </div>
  );
}

export default App;
