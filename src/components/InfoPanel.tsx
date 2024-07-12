import { MoveRight } from 'lucide-react';

export default function InfoPanel(props: PropsPanel) {
    return (
        <div className="flex flex-col space-y-4 justify-start items-start w-full">
            <p className='font-bold text-4xl w-[60%]'>{props.title}</p>
            <p className={`text-white/70 ${!props.expand && "w-1/2"}`}>{props.content}</p>
            <button className="bg-[#2BB32A] rounded-3xl px-5 py-2 flex justify-between items-center text-sm gap-3">
                <span>{props.btnTxt}</span>
                <span><MoveRight size={15} /></span>
            </button>
        </div>

    )
};

interface PropsPanel{
    title : string,
    content : string,
    btnTxt : string,
    expand : boolean
}