import "./topbar.css"
import Person from '@mui/icons-material/AccessibilityNew';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="topbarLogo">HordeBook</span>
            </div>
            <div className="topbarCenter">
                <span className="searchBar">
                    <SearchIcon className="searchIcon"/>
                    <input placeholder="search for friends or posts" className="searchInput"/>
                </span>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <ChatIcon/>
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <NotificationsIcon/>
                        <span className="topbarIconBadge">3</span>
                    </div>
                </div>
                <img src="https://i.pinimg.com/736x/24/61/0e/24610e142af38d0b9b2734f039bdf741.jpg" className="topbarProfilePic"/>
            </div>
        </div>
    )
}