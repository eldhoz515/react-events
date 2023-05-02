function Congrats() {
    return (
        <>
            <div className="bg-white w-2/5 h-4/6 rounded-2xl font-roboto flex flex-col items-center">
                <div className="text-[#2E2E2E] font-bold mt-10 mb-2">
                    Success
                </div>
                <div className="text-[#666666] font-bold">
                    Congratulations!
                </div>
                <div className="w-2/5 bg-cover bg-[url(https://media.istockphoto.com/id/1125716911/vector/party-popper-with-confetti.jpg?s=612x612&w=0&k=20&c=sAyofM-MQ5TL-pLyFseV9Vke_W2zyYX1btP90oGJQZE=)] h-1/2 mt-1" />
                <div className="text-[#3F3E40] text-sm w-4/6 text-center mt-3">
                    You’re all set! You can manage your invite by visiting ‘My Events’
                </div>
                <div className="text-white bg-dg px-20 py-2 rounded-3xl font-bold my-5 active:scale-90 cursor-pointer">
                    View Invitation
                </div>
            </div>

            <div className="bg-white mt-10 w-2/5 h-1/2 font-roboto p-3 rounded-2xl">
                <div className="flex justify-between">
                    <div className="font-bold text-[#2E2E2E] ">
                        Suggested Ads
                    </div>
                    <div className="font-bold text-dg">
                        View all
                    </div>
                </div>
                <div className="grid grid-cols-2 w-full h-3/4 gap-2 mt-4 ">
                    {[...Array(4)].map(() =>
                        <div className="bg-[url(https://images.shaadisaga.com/shaadisaga_production/photos/pictures/000/533/405/new_medium/WishTree_Weddings.jpg?1537783776)] rounded-xl bg-cover">

                        </div>
                    )}

                </div>
            </div>
        </>);
}

export default Congrats;