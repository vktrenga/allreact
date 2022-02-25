import "./share.css";
import { PermMedia, EmojiEmotions, Room, Label } from "@material-ui/icons";

export const Share = () => {
  return (
    <div>
      <div className="share">
        <div className="shareWrapper">
          <div className="shareTop">
            <img
              src="assets/people/girl1.jpeg"
              className="shareProfileImage"
              alt=""
            ></img>
            <textarea className="shareInput" placeholder=" Write here"></textarea>
          </div>
          <hr className="shareHr"></hr>
          <div className="shareBottom">
            <div className="shareOptions">
              <div className="shareOption">
                <PermMedia htmlColor="tomato" className="shareIcon" />
                <span className="shareOptionText"> Photos or Video</span>
              </div>
              <div className="shareOption">
                <EmojiEmotions htmlColor="goldenrod"  className="shareIcon" />
                <span className="shareOptionText"> Feeling</span>
              </div>
              <div className="shareOption">
                <Room  htmlColor="green"  className="shareIcon" />
                <span className="shareOptionText"> Location</span>
              </div>
              <div className="shareOption">
                <Label htmlColor="blue " className="shareIcon" />
                <span className="shareOptionText"> Tag</span>
              </div>
            </div>
            <button className="shareButton">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};
