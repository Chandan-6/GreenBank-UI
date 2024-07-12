interface CreditCardInterface {
    abs : boolean
}

const green = true;


export default function CreditCard(props : CreditCardInterface) {
    return (
        <div className={`bg-white bg-opacity-30 backdrop-blur flex flex-col justify-center h-auto w-[510px] rounded-3xl px-6 py-5 border border-white/45 ${props.abs && "absolute top-[14rem] right-[13.5rem]"}`}>
            <div className="space-y-12 ">

                <div className="w-full flex justify-between items-center">
                    <img src={"/eight.png"} alt="8 logo" className="w-8 h-6" />
                    <img src={"/wifi.png"} alt="wifi logo" className="w-6 h-7" />
                </div>

                <div className="space-y-3 w-fit">
                    <p className="text-gray-200">Credit Card No.</p>
                    <p className="font-bold text-xl flex justify-center items-center space-x-5">
                        <span>1602</span>
                        <span>0911</span>
                        <span>2019</span>
                        <span>2021</span>
                    </p>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center gap-10">
                        <EssentialDetails title={'Name'} content={'rehan raihan'} />
                        <EssentialDetails title={'Exp.'} content={'09/11'} />
                    </div>

                    <img src={'/chip.png'} alt="card chip" className="w-9 h-9 place-self-end" />
                </div>
            </div>
        </div>
    )
};

const EssentialDetails = (props: { title: string, content: string }) => {
    return (
        <div className="space-y-3">
            <p className="text-gray-300 text-sm">{props.title}</p>
            <p className="uppercase text-white text-sm">{props.content}</p>
        </div>
    )
}