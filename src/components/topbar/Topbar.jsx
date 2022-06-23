import React from 'react';
import './topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">React Admin DashBoard<span className="dot">.</span></span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language/>
                    <span className="topIconBadge">en</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings />
                </div>
                <img src="https://previews.123rf.com/images/vikasuh/vikasuh1107/vikasuh110700280/10042484-funny-white-robot-stay-with-blank-banner.jpg" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}
