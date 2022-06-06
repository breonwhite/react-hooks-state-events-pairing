import {useState} from 'react'
import video from '../data/video'

function LikeButtons() {
    const [increaseVotes, setVotesUp] = useState(video.upvotes)
    const [decreaseVotes, setVotesDown] = useState(video.downvotes)

    return(
        <div>
            <button onClick={() => setVotesUp(increaseVotes +1)}>{increaseVotes}👍</button>
            <button onClick={() => setVotesDown(decreaseVotes +1)}>{decreaseVotes}👎</button>
        </div>
    )

}

export default LikeButtons;