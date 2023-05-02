import { useState } from "react";

function Friends() {
    const [category, setCategory] = useState(0);
    const [selected, setSelected] = useState([...Array(10).fill(0)]);
    return (
        <>
            <div className="w-screen h-screen fixed top-0 grid place-items-center">
                <div className="bg-black opacity-40 w-full h-full absolute z-[-1]"></div>
                <div className="w-1/3 h-5/6 bg-white absolute font-roboto p-4 z-[0] rounded-2xl">
                    <div className="flex overflow-auto font-medium text-dg text-sm">
                        {[...Array(10)].map((value, idx) =>
                            <div className="border border-dg rounded-lg px-5 py-0.5 mx-1 cursor-pointer active:scale-90" style={{ backgroundColor: idx == category ? '#649B8E' : 'white', color: idx == category ? 'white' : '#649B8E' }} onClick={() => setCategory(idx)}>
                                Classmates
                            </div>
                        )}
                    </div>
                    <div className="bg-[#DDDDDD] border-2 border-[#B5B4B6] w-full h-10 rounded-xl my-5 flex items-center">
                        <input placeholder="Search" className="ml-5 appearance-none bg-transparent grow px-5 text-[#454545] outline-none" />
                        <div className="w-5 h-5 mx-5 rounded-full active:scale-90 cursor-pointer bg-[url(https://img.icons8.com/search)] bg-cover" />
                    </div>
                    <div className="my-5 text-[#3E3D3D] text-sm"><input type="checkbox" onClick={(event) => { setSelected([...Array(10).fill(event.target.checked == true ? 1 : 0)]) }} /> Select all</div>
                    {['Anil', 'Anu', 'Ameer'].map((value, idx) =>
                        <div className="flex mb-5 items-center py-2">
                            <span className="inline-block w-8 h-8 rounded-full bg-[url(https://cdn-icons-png.flaticon.com/512/149/149071.png)] bg-cover" />
                            <span className="ml-10 font-bold text-[#454545]">{value}</span>
                            {selected[idx] ?
                                <input className="ml-auto" type="checkbox" checked onClick={() => { let temp = [...selected]; temp[idx] = 0; setSelected(temp); }} />
                                :
                                <input className="ml-auto" type="checkbox" onClick={() => { let temp = [...selected]; temp[idx] = 1; setSelected(temp); }} />}
                        </div>)}
                    <div className="flex justify-between items-center mt-20">
                        <div className="w-10 h-10 bg-[url(https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/users.png)] bg-cover rounded-full" />
                        <div className="bg-dg font-bold text-white w-5/6 text-center py-1 cursor-pointer active:scale-90 rounded-3xl text-sm">Add Guest</div>                        
                    </div>
                    <div className="text-dg w-5/6 text-center py-1 rounded-3xl border-2 border-dg mt-3 ml-auto font-bold cursor-pointer active:scale-90 text-sm">Cancel</div>
                </div>
            </div >
        </>
    );
}

export default Friends;