import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
export const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo"> My Facebook</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBox">
          <Search className="searchBoxIcon"></Search>
          <input className="searchInput" placeholder=" Search Friends "></input>
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIcons">
          <img src="assets/people/girl1.jpeg" className="topbarImage"></img>
          <span className="profileImage"> Rengaraj</span>
        </div>
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink"> Find Friends</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person></Person>
            <span className="topbarIconBadge"> 13</span>
          </div>
          <div className="topbarIconItem">
            <Chat></Chat>
            <span className="topbarIconBadge">12</span>
          </div>
          <div className="topbarIconItem">
            <Notifications></Notifications>
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
      </div>
    </div>
  );
};
