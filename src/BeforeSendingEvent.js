function Popup() {
    return (
        <>
            <div className="w-screen h-screen fixed top-0 grid place-items-center">
                <div className="bg-black opacity-40 w-full h-full absolute"></div>
                <div className="w-fit h-fit p-8 bg-white absolute rounded-3xl flex flex-col items-center">
                    <div className="font-roboto font-bold text-2xl mb-10 text-center text-[#454545]">
                        Choose how you want to share<br></br> this Invitation
                    </div>
                    <label className="font-roboto text-sm flex w-full justify-between text-lb items-center">
                        Want Post event on Home Screen
                        <div className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                        </div>
                    </label>
                    <label className="font-roboto text-sm flex w-full justify-between text-lb items-center mt-10">
                        Do you want to Enable Share options
                        <div className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                        </div>
                    </label>
                    <div className="w-fit h-fit px-16 py-2 bg-dg rounded-xl mt-12 font-roboto text-white font-bold cursor-pointer active:scale-90">Confirm</div>
                </div>
            </div>
        </>
    );
}

export default Popup;