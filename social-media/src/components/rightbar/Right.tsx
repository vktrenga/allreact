import "./rightbar.css";

export const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="rightbarContainer">
          <img
            className="birthdayImage"
            alt=""
            src="./assets/common/gift.jpeg"
          ></img>
          <span className="birthdayText">
            {" "}
            <b>Rengaraj </b> and <b>3 other friends </b>birthday on today{" "}
          </span>
        </div>
        <img
          className="rightbarAd"
          alt=""
          src="./assets/common/gift.jpeg"
        ></img>
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {[...Array(30)].map((x, i) => (
            <li className="rightbarFriend">
              <div className="rightbarProfileImageContainer">
                <img
                  className="rightbarProfileImage"
                  alt=""
                  src="./assets/common/gift.jpeg"
                ></img>
                <span className="onlineFriend"></span>
              </div>
              <span className="onlineFriendText">Rengaraj</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
