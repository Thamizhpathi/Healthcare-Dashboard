import React from "react";
import "../styles/sidebar.css";
 import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../features/SidbarSlice';
import { X } from "lucide-react";
const Sidebar = ({ links }) => {
  const dispatch = useDispatch();
   const isVisible = useSelector((state) => state.sidebar.isVisible);
  return (
   <div className={`sidebar ${isVisible ? "show-sidebar" : ""}`}>
   {isVisible && (
        <X size={"40px"}  onClick={()=>dispatch(toggleSidebar())} className="close-icon"/>
      )}
      <div className="even">
        <p className="sidebar-heading">General</p>

        {links.map((link, index) => {
          const Icon = link.icon;
            const isLast=index===links.length-1
          return (
            <React.Fragment key={index}>
              {index === 5 && <p className="sidebar-heading">Tools</p>}

              <div className={`sidebar-nav-items ${isLast ? 'last-item' :''} `}>
                <Icon size={18} />
                <p>{link.label}</p>
              </div>
            </React.Fragment>
          );
        })}
        {/* <div className="sidebar-nav-items">
         <ArrowDownUp/>
          <p>History</p>
        </div>
        <div className="sidebar-nav-items">
          <CalendarDays />
          <p>Calender</p>
        </div>
        <div className="sidebar-nav-items">
          <SquarePlus />
          <p>Appointments</p>
        </div>
        <div className="sidebar-nav-items">
          <ChartLine />
          <p>Statistics</p>
        </div>

        <p className="sidebar-heading">Tools</p>
        <div className="sidebar-nav-items">
          <MessageCircleMore />
          <p>Chat</p>
        </div>

        <div className="sidebar-nav-items">
          <Phone />
          <p>Support</p>
        </div>
        <div className="sidebar-nav-items" style={{ marginTop: "6em" }}>
          <Settings />
          <p>Setting</p>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
