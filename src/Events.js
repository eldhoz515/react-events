import { Routes, Route } from "react-router-dom";
import Preview from './Preview';
import Congrats from './Congrats';

function Events() {
    return (
        <>
            <div className="bg-vlg w-1/4 p-2 mt-16 font-roboto">
                <div className="font-roboto w-full text-center">
                    <span>Create </span>
                    <span className="text-dg">Event</span>
                </div>
                <div className="mt-5">
                    {['Re-Union', 'Birthday', 'Marriage', 'Anniversary', 'Baby Shower', 'Others'].map((value) => {
                        return (<div className="text-dg font-roboto bg-lg border border-br w-full text-center p-2 rounded mb-3 flex items-center">
                            <div className="rounded-full border-2 border-dg w-10 h-10 ml-2 mr-16" />
                            {value}
                        </div>)
                    })}
                </div>
            </div>
        </>
    );
}

export default Events;