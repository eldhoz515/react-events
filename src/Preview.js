function Preview() {
    return (
        <>
            <div className="bg-white rounded-2xl w-2/5 h-4/6 flex flex-col items-center p-5">
                <div className="text-[#2E2E2E] font-bold font-roboto">Event Title</div>
                <div className="bg-[url(https://previews.123rf.com/images/cosmaa/cosmaa1811/cosmaa181100120/127577168-vector-cartoon-illustration-of-group-of-happy-friends-getting-together.jpg)] bg-cover text-[#020202] font-roboto w-full h-1/2 my-5 flex flex-col items-center justify-center">
                    <div className="font-bold text-2xl">
                        Event Title
                    </div>
                    <div>
                        ( Date & Time )
                    </div>
                    <div className="font-bold">
                        Venkata Manohar
                    </div>
                    <div>
                        Location
                    </div>
                </div>
                <div className="text-[#060606] font-roboto self-start w-full h-fit grid gap-y-2">
                    <div>
                        <div className="inline-block w-32 text-sm">Hosted By</div><div className="inline mx-2">:</div><div className="font-bold inline">Venkata Manohar</div>
                    </div>
                    <div>
                        <div className="inline-block w-32 text-sm">Mobile No</div><div className="inline mx-2">:</div><div className="font-bold inline">+1 1234567890</div>
                    </div>
                    <div>
                        <div className="inline-block w-32 text-sm">Food Availabiltiy</div><div className="inline mx-2">:</div><div className="font-bold inline">Yes</div>
                    </div>
                    <div>
                        <div className="inline-block w-32 text-sm">Event live Stream</div><div className="inline mx-2">:</div><div className="font-bold inline">Yes</div>
                    </div>
                    <div className="flex">
                        <div className="inline-block w-32 text-sm">Location</div><div className="inline mx-2">:</div><div className="font-bold inline-block w-1/2">1234 Address Ave, City, State Country - Zipcode.</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Preview;