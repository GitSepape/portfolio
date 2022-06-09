import React, { useState } from "react";
import { HeaderWrapper } from "./HeaderStyles";
import Navbar from "./Navbar";
import MenuButton from "./Menubutton";
import Logo from "./Logotopbar";

function Header() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
    setOpen(!open);
    };

    return (
    <HeaderWrapper>
        <Logo></Logo>
        <MenuButton open={open} handleClick={handleClick} />
        <Navbar open={open} />
    </HeaderWrapper>
    );
}

export default Header;