
import { Menu, Search, Bell, Plus, X } from "lucide-react";
import avatar from "../assets/navbarassets/avatar.png";
import Sidebar from "./Sidebar";
import "../styles/navbar.css";
import { useDispatch} from 'react-redux';
import { toggleSidebar } from '../features/SidbarSlice';
const Header = () => {
  const dispatch = useDispatch();
   
  return (
    <div className="header-flex">
      <Menu size={"40px"} className="menu-icon" onClick={()=>dispatch(toggleSidebar())} style={{margin:"auto"}}/>
        
      <div className="cobime">
        <div className="title">
          <h2>
            <span className="title-clr">Health</span>Care.
          </h2>
        </div>
        <div className="nav-search">
          <input type="text" placeholder="Search" className="nav-input" />
          <Search size={"30px"} className="search-icon" />
          <Bell size={"25px"} fill="#37349F" className="notification-icon" />
        </div>
      </div>
      <div className="cobime2">
        <div className="navbar-links">
          <Search size={"40px"} className="mobile-search-icon" />
          <div className="avatar">
            <img src={avatar} alt="" width={"28px"} />
          </div>
          <div className="plus-card">
            <Plus className="plus" />
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Header;
