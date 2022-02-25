import { MoreVert } from "@material-ui/icons";
import "./post.css";
export const Post = () => {
  return (
    <>
      {[...Array(30)].map((x, i) => (
        <div className="post">
          <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <img
                  src="assets/people/girl1.jpeg"
                  className="postUserProfileImage"
                  alt=""
                ></img>
                <span className="postUserName">Rengaraj</span>
                <span className="postDatetime">3 Days Ago</span>
              </div>
              <div className="postTopRight">
                <MoreVert />
              </div>
            </div>
            <hr className="postHr"></hr>
            <div className="postCenter">
              <span className="postText">
                {" "}
                jdsfjjsdlfj fldslf klsdflsdfdsklj fldfljsdlfjlsdjfldj
              </span>
              <img
                src="assets/people/girl1.jpeg"
                className="postImage"
                alt=""
              ></img>
            </div>

            <div className="postBottom">
              <div className="postBottomLeft">
                <img
                  src="assets/common/like.png"
                  className="likeIcon"
                  alt=""
                ></img>
                <img
                  src="assets/common/heart.png"
                  className="likeIcon"
                  alt=""
                ></img>
                <span className="postLikeCounter"> 3 people likes this</span>
              </div>
              <div className="postBottom">
                <span className="postCommentText"> 10 Comments</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
