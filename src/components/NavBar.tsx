export default function NavBar(){
    return (
        <nav className="flex justify-between items-center w-full mr-16 top-0">
            <div className="flex justify-center items-center gap-3">
                <img src={"/Exclude.png"} alt="logo" className="w-5 h-5" />
                <p className="font-bold tracking-wide">GreenBank</p>
            </div>
            <div className="flex justify-center items-center gap-3">
                <p className="text-white/89">Why Us</p>
                <p className="text-white/89">Services</p>
                <p className="text-white/89">Our Process</p>
                <p className="text-white/89">Payments</p>
                <p className="text-white/89">FAQs</p>
            </div>
            <button className="px-5 py-2 rounded-3xl border-2 border-[#2BB32A] text-[#2BB32A] text-sm">Contact</button>
        </nav>
    )
}