import "./sidebar.css";
import {
  RssFeed,
  Chat,
  VideoLibrary,
  Group,
  HelpOutline,
  Bookmark,
  Work,
  Event,
  School,
} from "@material-ui/icons";
export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chat</span>
          </li>

          <li className="sidebarListItem">
            <VideoLibrary className="sidebarIcon" />
            <span className="sidebarListItemText">Video</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Group</span>
          </li>

          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmark</span>
          </li>

          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">HelpOutline</span>
          </li>

          <li className="sidebarListItem">
            <Work className="sidebarIcon" />
            <span className="sidebarListItemText">Job</span>
          </li>

          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>

          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr"></hr>
        <ul className="sidebarFriendList">
          {[...Array(30)].map((x, i) => (
            <li className="sidebarFriend">
              <img
                className="sidebarFriendImage"
                src="./assets/people/girl1.jpeg"
                alt=""
              />
              <span className="sidebarFriendName">Rengaraj</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
