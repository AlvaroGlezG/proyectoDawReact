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
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

import logoOnly from "img/logo/logo_small_icon_only.png";
import logoWhiteText from "img/logo/logo_white_large.png";

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./sideBar.css";


export default function SiteBar(menuState) {

    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(menuState)
    const [login, setLogin] = useState(false)

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
                            <MenuItem active={true} icon={<FiHome />}>Home<Link href="/"/></MenuItem>
                            <MenuItem icon={<FaList />}>Películas<Link href="/dasdf"/></MenuItem>
                            <MenuItem icon={<FaRegHeart />}>Favoritas<Link href="/"/></MenuItem>
                            <MenuItem icon={<RiPencilLine />}>Tus reseñas<Link href="/"/></MenuItem>
                            <MenuItem icon={<BiCog />}>Ajustes<Link href="/"/></MenuItem>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">
                            {
                                login ?
                                <MenuItem icon={<FiLogOut />}>Logout<Link href="/"/></MenuItem>
                                :
                                <MenuItem icon={<FiLogOut />}>Login<Link href="/login"/></MenuItem>
                            }
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    );
};