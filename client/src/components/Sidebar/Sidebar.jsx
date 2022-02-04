import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import GroupsIcon from '@mui/icons-material/Groups';
import Friend from '../../components/Friend/Friend'
import {Users} from "../../dummyData";
import Online from "../Online/Online";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeedIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <ChatIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <GroupsIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                </ul>
                <button className="sidebarButton"> Show more </button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    {Users.map(u => (
                        <Friend key={u.id} user={u} />
                    ))}
                </ul>
            </div>
        </div>
    )
}