import CreditCard from '../CreditCard';
import InfoPanel from '../InfoPanel';

export default function Hook() {
    return (
        <div className="w-full flex justify-between items-center mt-24">

            <InfoPanel title={'Discover the Perfect Credit Card for You'} content={'Discover the power of our secure and rewarding credit cards. Explore our range of credit cards and take control of your finances today'} btnTxt={'Get Started'}  expand={false} />

            <div>
                <div className="w-[420px] h-[420px] bg-[#2BB32A] rounded-full relative"></div>
                <CreditCard abs={true} />
            </div>

        </div>
    )
}