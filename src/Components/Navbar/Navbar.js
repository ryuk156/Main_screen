import React from "react";
import "./Navbar.css";
import Notification_icon from "../../assets/icons/notification_icon.png";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar-head">
        <div className="Nav-item-left">View Events</div>
        <div className="Nav-item-right">
          <img className="Nav-icon" src={Notification_icon} />
          <div className="Nav-user-initial">
            <div className="Nav-user-item">YP</div>
          </div>
          <div className="Nav-user-name">Yash Patel</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
