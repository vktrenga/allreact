import "./feed.css";
import { Share } from "../share/Share";
import { Post } from "../post/Post";
export const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <div className="feedTop">
          <Share />
        </div>
        <div className="feedBottom">
          <Post />
        </div>
      </div>
    </div>
  );
};
