import CreditCard from '../CreditCard';
import InfoPanel from '../InfoPanel';

export default function Personalized() {
    return (
        <div className="w-full flex justify-between items-center mt-28">
            <InfoPanel title={'Design your personalized credit card'} content={'You have the freedom to personalize the design of your credit card, ensuring a truly unique experience that makes you feel extraordinary.'} btnTxt={'Create New Credit Card'}  expand={false} />

            <div className="relative w-96 h-96 ">
                <div className="absolute top-0 right-32 transform translate-x-8 -translate-y-4 rotate-12 z-20">
                    <CreditCard abs={false}  />
                </div>
                <div className="absolute top-28 right-28 transform -translate-x-4 translate-y-4 -rotate-6 z-10">
                    <CreditCard abs={false} />
                </div>

            </div>
        </div>
    )
}