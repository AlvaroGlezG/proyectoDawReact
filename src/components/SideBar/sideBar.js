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
    const [login, setLogin] = useState(false)
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
                                    <MenuItem active={activateSideBar[5]} icon={<FiLogOut />}>Logout<Link href="/logout" /></MenuItem>
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