import React, { useState } from 'react'
import './Sidebar.css'

import anonymous from './IMAGES/xpath.png'
// icons
import PublicIcon from '@material-ui/icons/Public';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import StorefrontIcon from '@material-ui/icons/Storefront';
import DesktopWindowsOutlinedIcon from '@material-ui/icons/DesktopWindowsOutlined';
import SecurityOutlinedIcon from '@material-ui/icons/SecurityOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Sidebar() {

    const [open, setOpen] = useState(false);

    return (
        <div className="navigation">

            <div className="main__menu links__cont" style={{ display: open ? "flex" : "block", left: open ? "0" : "-100%" }}>

                <div className="user__details">
                    <div><span><img className="annoy__icon" src={anonymous} /></span></div>
                    <div className="user__title">
                        <span>subhanakram300<br /><span className="user">User</span></span>
                    </div>
                </div>

                <ul>
                    <li>
                        <a href="#">
                            <span className="icon"><PublicIcon /></span>
                            <span className="title">News</span>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">
                            <span className="icon"><CreditCardIcon /></span>
                            <span className="title">CVV</span>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">
                            <span className="icon"><StorefrontIcon /></span>
                            <span className="title">Dumps</span>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">
                            <span className="icon"><DesktopWindowsOutlinedIcon /></span>
                            <span className="title">RDP</span>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">
                            <span className="icon"><SecurityOutlinedIcon /></span>
                            <span className="title">Stealer Logs</span>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">
                            <span className="icon"><MonetizationOnOutlinedIcon /></span>
                            <span className="title">Paypal</span>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">
                            <span className="icon"><AssignmentTurnedInOutlinedIcon /></span>
                            <span className="title">Checkers</span>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">
                            <span className="icon"><SettingsIcon /></span>
                            <span className="title">Tools</span>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">
                            <span className="icon"><LocalMallIcon /></span>
                            <span className="title">My Purchases</span>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">
                            <span className="icon"><ContactSupportIcon /></span>
                            <span className="title">Support</span>
                        </a>
                    </li>
                </ul>
                <div className="close__menu" onClick={() => setOpen(false)}><CloseIcon /></div>
            </div>

            <div className="click__menu" onClick={() => setOpen(!open)}><MenuIcon /></div>
        </div>
    )
}

export default Sidebar
