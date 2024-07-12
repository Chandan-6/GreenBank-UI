
const LinkList = [
    {
        id : 1,
        title : 'About us',
        underdog : ['Investors', 'Features', 'Book a demo', 'Security']
    },
    {
        id : 2,
        title : 'Products',
        underdog : ['Credit Cards','Gift Cards','Savings accounts','NFT']
    },
    {
        id : 3,
        title : 'Useful Links',
        underdog : ['Free rewards','Documentation','Affilitate program']
    },
    {
        id : 1,
        title : 'Social',
        underdog : ['Changelog','License','Site maps','News']
    },
]


export default function Footer() {
    return (
        <footer className="mt-24">
            <section className="flex justify-center items-center">
                <div className="flex flex-col space-y-4 justify-start items-start">
                    <p className='font-bold text-4xl w-[60%]'>Easy Way to manage your finances</p>
                    <p className={`text-white/70 w-1/2}`}>Easy to use mobile app that support on android and ios.</p>

                    <div className="flex justify-center items-center gap-5">
                        <p className="px-5 py-4 rounded-xl bg-gray-500/50 flex justify-center items-center"><img className="h-6" src={'/app_store.png'} alt="app store" /></p>
                        <p className="px-5 py-4 rounded-xl bg-gray-500/50 flex justify-center items-center"><img className="h-6" src={'/play_store.png'} alt="play store" /></p>
                    </div>
                </div>

                <img src={'/phone.png'} alt="phone view" />
            </section>

            <section className="w-full flex justify-around items-start bg-gren-950/30 backdrop-blur-3xl py-10 px-16">
                <div className="w-[30%]">
                    <div className="flex justify-center items-center gap-3">
                        <img src={"/Exclude.png"} alt="logo" className="w-5 h-5" />
                        <p className="font-bold tracking-wide">GreenBank</p>
                    </div>
                </div>

                <div className="w-full flex justify-evenly items-start">
                    {
                        LinkList.map((item) => (
                            <div key={item.id} className="">
                                <p className="font-medium mb-4">{item.title}</p>
                                <div className="space-y-2">
                                    {
                                        item.underdog.map((subItem, index) => (
                                            <p key={index} className="text-gray-500/70 text-sm">
                                                {subItem}
                                            </p>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </footer>
    )
}