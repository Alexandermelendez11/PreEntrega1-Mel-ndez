import LogoPrueba from "@/assets/images/logo.svg";
import AvatarImage from "@/assets/images/image-avatar-2.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import { useState } from "react";
import NavLinkHeader from "@/components/header/NavLinkHeader";

const MainHeader = () => { 
    const [navClass,setNavClass] = useState("hidden font-bold md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0")

    const handleOpenMenu = () => {
        setNavClass("absolute top-0 left-0 flex h-full w-4/5 flex-col gap-y-5 bg-white p-8 font-bold md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0 z-10");
    };
    const handleCloseMenu = () => {
        setNavClass("hidden font-bold md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0");
    };

    return (
        <>
            <header className="container mx-auto flex items-center gap-8 p-4 md:p-0">
                <button className="md:hidden" onClick={handleOpenMenu}>
                    <MenuIcon />
                </button>
                <img src={LogoPrueba} alt="Logo Shopping" className="mr-auto md:mr-0" />
                <nav className={navClass}>
                    <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
                        <CloseIcon />
                    </button>
                    <NavLinkHeader texts="Women" />
                    <NavLinkHeader texts="Men" />
                    <NavLinkHeader texts="Children's" />
                    <NavLinkHeader texts="About" />
                    <NavLinkHeader texts="Contact" />
                </nav>
                <div className="flex gap-4">
                    <button>
                        <CartIcon />
                    </button>
                    <img src={AvatarImage} alt="Logo Avatar" className="w-10" />
                </div>
            </header>
            <span className="container mx-auto hidden h-[1px] w-full bg-gray-500 md:block"></span>
        </>
    );
};
export default MainHeader;