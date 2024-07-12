export default function Partners() {
    return (
        <div className="flex justify-center items-center space-x-28 flex-wrap mt-24">
            {ImageTitle.map((item, index) => <img key={index} src={`/partners/${item}`} alt="partners name" className="h-5"/>)}
            
        </div>
    )
};

const ImageTitle = [
    'Vector.png',
    'Vector-1.png',
    'Vector-2.png',
    'Vector-3.png',
    'Vector-4.png', 
    'Vector-5.png' 
]