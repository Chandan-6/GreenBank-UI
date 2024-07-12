

const commentsList = [
    {
        id: 1,
        comment: "Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings.",
        name: 'Hadid Khan',
        proffession: 'UX Designer',
        profileImg: '/Ellipse.png'
    },
    {
        id: 2,
        comment: "It's is both attractive and highly adaptable. It's exactly what I've been looking forefinitely wo lorem ipsum dolorth the investment",
        name: 'Hadid Khan',
        proffession: 'Web Designer',
        profileImg: '/Ellipse-1.png'
    },
    {
        id: 3,
        comment: "I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking.",
        name: 'Hadid Khan',
        proffession: 'Trust Administrator',
        profileImg: '/Ellipse-2.png'
    },
]

export default function Comments() {
    return (
        <div className="flex justify-center gap-6 mt-20">
            {
                commentsList.map((item) => <CommentBox key={item.id} comment={item.comment} name={item.name} proffession={item.proffession} profileImg={item.profileImg} />)
            }
        </div>
    )
};

interface propsInterface {
    comment : string,
    name : string,
    proffession : string,
    profileImg : string,
}

const CommentBox = (props: propsInterface) => {
    return (
        <div className="bg-gray-500/20 backdrop-blur-md rounded-2xl px-7 py-8 space-y-6 w-96">
            <div className="w-12 h-12 bg-gray-500 bg-opacity-50 rounded-full relative backdrop-blur-lg flex justify-center items-center">
                <img src={'/quotes.png'} alt='user profile' className="w-5 h-5" />
            </div>

            <p className="text-white/90">{`"${props.comment}"`}</p>

            <div className="flex  gap-3">
                <img src={props.profileImg} alt="user img" />
                <div className="space-y-1">
                    <p className="text-md font-semibold">{props.name}</p>
                    <p className="text-white/70 text-xs">{props.proffession}</p>
                </div>
            </div>


        </div>
    )
}