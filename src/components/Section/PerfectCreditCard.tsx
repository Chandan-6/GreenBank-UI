import CreditCard from '../CreditCard';
import InfoPanel from '../InfoPanel';

export default function PerfectCreditCard() {
    return (
        <div className="w-full flex flex-row-reverse justify-between items-center mt-28">
            <div className="w-1/2">
            <InfoPanel title={'Find the Perfect Credit Card for You'} content={'Discover your ideal credit card with ease. Our comprehensive selection caters to every financial need and lifestyle. Whether you seek cashback rewards, travel perks, or building credit, we have the perfect credit card waiting for you. Unleash the possibilities and find the credit card that fits your unique goals and aspirations.'} btnTxt={'Learn More'} expand={true}/>
            </div>
            <div className="relative w-96 h-96 ">
                <div className="absolute top-0 -right-32 transform  translate-y-10 -rotate-6 z-20">
                    <CreditCard abs={false}  />
                </div>
            </div>
        </div>
    )
}