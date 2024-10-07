export default function TrendInfo(){
    return (
        <div className="w-full py-7 rounded-3xl px-10 bg-gray-500/30 backdrop-blur-md md:flex grid grid-cols-2 gap-6 justify-around items-center mt-24">
            {infoObject.map((item, index) => <Info key={index} value={item.value} title={item.title}/>)}
        </div>
    )
};

const infoObject = [
    {
        value : '16y',
        title : 'Experience'
    },
    {
        value : '250+',
        title : 'Merchant Partner'
    },
    {
        value : '18+',
        title : 'Years Experience'
    },
    {
        value : '10.2k+',
        title : 'Worldwide Clients'
    },

]

interface infointerface {
    value : string,
    title : string
};

const Info = (props : infointerface) => {
    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-3xl font-bold">{props.value}</p>
            <p className="text-[#2BB32A] text-xs">{props.title}</p>
        </div>
    )
}