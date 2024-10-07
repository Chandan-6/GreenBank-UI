'use client';
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

export default function NavBar() {

    const [showMenu, setShowMenu] = useState<Boolean>(false);

    return (
        <nav className="flex justify-between items-center w-full mr-16 top-0">
            <div className="flex justify-center items-center gap-3">
                <img src={"/Exclude.png"} alt="logo" className="w-5 h-5" />
                <p className="font-bold tracking-wide">GreenBank</p>
            </div>
            <div className="hidden md2:flex justify-center items-center gap-6">
                <p className="text-white/89 hover:text-white">Why Us</p>
                <p className="text-white/89 hover:text-white">Services</p>
                <p className="text-white/89 hover:text-white">Our Process</p>
                <p className="text-white/89 hover:text-white">Payments</p>
                <p className="text-white/89 hover:text-white">FAQs</p>
            </div>
            <button className="px-5 py-2 rounded-3xl border-2 border-[#2BB32A] text-[#2BB32A] text-sm hidden md2:block">Contact</button>
            <IoMenu onClick={() => setShowMenu(true)} className="size-7 md2:hidden block cursor-pointer" color="white" />


            {
                showMenu && <div className="w-[35%] z-10 absolute top-0 right-0 bg-gray-200/30 backdrop-blur-md text-black h-screen py-6 px-4 flex flex-col justify-start items-start space-y-6">
                    <IoClose onClick={() => setShowMenu(false)} className="size-10 self-end mr-4" color="black"/>
                    <p className="text-white drop-shadow-lg">Why Us</p>
                    <p className="text-white drop-shadow-lg">Services</p>
                    <p className="text-white drop-shadow-lg">Our Process</p>
                    <p className="text-white drop-shadow-lg">Payments</p>
                    <p className="text-white drop-shadow-lg">FAQs</p>
                </div>
            }

        </nav>
    )
}