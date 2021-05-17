import React, { useState } from "react";
import { Link } from 'wouter';

//import react pro sidebar components
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPaypalLine } from "react-icons/ri";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

import logoOnly from "img/logo/logo_small_icon_only.png";
import logoWhiteText from "img/logo/logo_white_large.png";

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./sideBar.css";

export default function SideBar(menuState) {

    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(menuState)
    const [login, setLogin] = useState(true)
    const URLactual = window.location.pathname;

    let activateSideBar = [true, false, false, false, false, false, false];

    switch (URLactual) {
        case "/":
            if ((activateSideBar.indexOf(true) >= 1)) {
                activateSideBar[activateSideBar.indexOf(true)] = false;
                activateSideBar[0] = true;
            }
            break;
        case "/films":
            if ((activateSideBar.indexOf(true) >= 0)) {
                activateSideBar[activateSideBar.indexOf(true)] = false;
                activateSideBar[1] = true;
            }
            break;
        case "/films/pulpfiction":
            if ((activateSideBar.indexOf(true) >= 0)) {
                activateSideBar[activateSideBar.indexOf(true)] = false;
                activateSideBar[1] = true;
            }
            break;
        case "/donations":
            if ((activateSideBar.indexOf(true) >= 0)) {
                activateSideBar[activateSideBar.indexOf(true)] = false;
                activateSideBar[2] = true
            }
            break;
        case "/userReviews":
            if ((activateSideBar.indexOf(true) >= 0)) {
                activateSideBar[activateSideBar.indexOf(true)] = false;
                activateSideBar[3] = true;
            }
            break;
        case "/settings":
            if ((activateSideBar.indexOf(true) >= 0)) {
                activateSideBar[activateSideBar.indexOf(true)] = false;
                activateSideBar[4] = true;
            }
            break;
        case "/login":
            if ((activateSideBar.indexOf(true) >= 0)) {
                activateSideBar[activateSideBar.indexOf(true)] = false;
                activateSideBar[5] = true;
                activateSideBar[6] = true;
            }
            break;
    }

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    return (
        <>
            <div id="header">
                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar collapsed={menuCollapse} onClick={menuIconClick}>
                    <SidebarHeader>
                        <div className="logotext">
                            {/* small and big change using menucollapse state */}
                            <a>{menuCollapse ? <img src={logoOnly} height={"50px"}></img> : <img src={logoWhiteText} height={"50px"}></img>}</a>

                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem active={activateSideBar[0]} icon={<FiHome />}>Home<Link href="/" /></MenuItem>
                            <MenuItem active={activateSideBar[1]} icon={<FaList />}>Películas<Link href="/films" /></MenuItem>
                            <MenuItem active={activateSideBar[3]} icon={<RiPencilLine />}>Tus reseñas<Link href="/userReviews" /></MenuItem>
                            <MenuItem active={activateSideBar[2]} icon={<RiPaypalLine />}>Donaciones<Link href="/donations" /></MenuItem>
                            <MenuItem active={activateSideBar[4]} icon={<BiCog />}>Ajustes<Link href="/settings" /></MenuItem>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">
                            {
                                login ? 
                                <>
                                    <img id="userIcon" style={{height: "50px", width: "50px", margin: "10px 0 10px 15px",}} src="data:image/png;base64,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"></img>
                                    <MenuItem active={activateSideBar[5]} icon={<FiLogOut />}>Logout 
                                    <Link href="/logout" /></MenuItem>
                                </>
                                    :
                                    <MenuItem active={activateSideBar[6]} icon={<FiLogOut />}>Login<Link href="/login" /></MenuItem>
                            }
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    );
};