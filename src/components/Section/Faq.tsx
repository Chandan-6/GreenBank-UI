
const Questions = [
    {
        id: 1,
        question: 'What credit score do I need to apply for a credit card?',
        answer: ''
    },
    {
        id: 2,
        question: ' How can I apply for a credit card online?',
        answer: ''
    },
    {
        id: 3,
        question: 'Are there any annual fees associated with the credit card?',
        answer: ''
    },
    {
        id: 4,
        question: 'How long does it take to receive the credit card once approved?',
        answer: ''
    },
    {
        id: 5,
        question: 'How can I check my credit card balance and transactions?',
        answer: ''
    },
    {
        id: 6,
        question: ' What should I do if my credit card is lost or stolen?',
        answer: ''
    },
]

export default function Faq() {
    return (
        <div className="mt-28 w-[70%] mx-auto">
            <p className="text-2xl font-bold text-center mb-12">FAQs</p>
            <div className="space-y-4">
                {
                    Questions.map((item) => (
                        <div key={item.id} className="flex flex-col justify-center items-center gap-4">
                            <div className="flex justify-between items-center w-full">
                                <p className="text-lg tracking-wider font-semibold text-white/80">{item.question}</p>
                                <p className="text-xl font-semibold text-white/80">+</p>
                            </div>
                            <div className="h-px w-full bg-white/70"></div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}