import React, { useEffect, useState } from 'react'
import './Navbar.css'

import logo from './IMAGES/zhAG7DczoD.png'

// import MailOutlineIcon from '@material-ui/icons/MailOutline';
// import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import LocalMallIcon from '@material-ui/icons/LocalMall';
// import ColorLensIcon from '@material-ui/icons/ColorLens';
// import FullscreenIcon from '@material-ui/icons/Fullscreen';
import ZwIcon from "react-zwicon";

function Navbar() {

    const [show, handleShow] = useState(true);

    const transitionNavbar= () => {
        if (window.scrollY > 40) {
            handleShow(true);
         
        }
        else {
            handleShow(false);
        }
    }
    // useEffect(() => {
    //     window.addEventListener("scroll",transitionNavbar);
    //     return () => window.removeEventListener("scrolly", transitionNavbar); 
    // }, [])
    

    return (
    

        <div className={`nav ${show && "nav__black"}`} id="m"> 
       {/* <div > <p id="menu">MENU</p></div> */}
           
            <div className="logo"><img src={logo} /></div>
            <div className="menu__links">
                <span className="links d-none">  <ZwIcon icon="mail" style={{fontSize:"24px"}} />   </span>
                <span className="links d-none">  <ZwIcon icon="bell"  style={{fontSize:"24px"}}    />   </span>
                <span className="links" id="topUp"><ZwIcon icon="shopping-cart"  style={{fontSize:"24px"}}    /> </span>
                <span className="links" id="topUp">  <ZwIcon icon="palette"  style={{fontSize:"24px"}}    /> </span>
                <span className="links d-none">  <ZwIcon icon="expand-wide" style={{fontSize:"24px"}}     /> </span>
                {/* <span className="links d-none"> <ZwIcon icon="" />  </span> */}
                <span className="price" id="topUp">$0</span>
            </div>
        </div>
    )
}


 
export default Navbar
