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
import ZwIcon from "react-zwicon";
import {FaUserSecret,FaPaypal} from "react-icons/fa";
function Sidebar() {

    const [open, setOpen] = useState(false);

    return (
        
        <div className="navigation" id="sidebar">
        
           <br></br>

            <div className="main__menu links__cont" style={{ display: open ? "flex" : "block", left: open ? "0" : "-100%" }}>
      
                <div className="user__details">
                    <div><span><img className="annoy__icon" src={anonymous} /></span></div>
                    <div className="user__title">
                        <span>subhanakram300<br /><span className="user">User</span></span>
                        {/* <FontAwesomeIcon icon="coffee"></FontAwesomeIcon> */}
                        <i class="fa fa-user-secret" aria-hidden="true" style={{fontsize:"30px"}}></i>
                    </div>
                </div>

                <ul>
                    <li>
                        <a href="#">
                            <span className="icon">
                                {/* <PublicIcon /> */}
                                <ZwIcon icon="earth" style={{fontSize:"22px"}} />
                                
                                </span>
                            <span className="title">News</span>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">
                            <span className="icon">
                                  <ZwIcon icon="credit-card" style={{fontSize:"22px"}} />
                            </span>
                            <span className="title">CVV</span>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">
                            <span className="icon">
                                {/* <StorefrontIcon /> */}
                                <ZwIcon icon="store"  style={{fontSize:"23px"}} />
                            
                            </span>
                            <span className="title">Dumps</span>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">
                            <span className="icon">
                            <ZwIcon icon="desktop" style={{fontSize:"22px"}} />
                            
                            </span>
                            <span className="title">RDP</span>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <FaUserSecret style={{color:"wheat"}} />
                            </span>
                            <span className="title">Stealer Logs</span>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <FaPaypal />
                            </span>
                            <span className="title">Paypal</span>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">
                            <span className="icon">
                            <ZwIcon icon="task" style={{fontSize:"22px",color:"white"}} />
                            </span>
                            <span className="title">Checkers</span>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">
                            <span className="icon">
                            <ZwIcon icon="cog" style={{fontSize:"22px"}} />
                            </span>
                            <span className="title">Tools</span>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">
                            <span className="icon">
                            <ZwIcon icon="shopping-bag" style={{fontSize:"22px"}} />
                            </span>
                            <span className="title">My Purchases</span>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">
                            <span className="icon">
                            <ZwIcon icon="lifebelt" style={{fontSize:"22px"}} />
                            </span>
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
