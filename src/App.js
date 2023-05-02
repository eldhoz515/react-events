import './App.css';
import Events from './Events';
import BeforeSendingEvent from './BeforeSendingEvent'
import Preview from './Preview';
import Congrats from './Congrats';
import Friends from './Friends';
import Header from './Header';
import { NavLink, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <div className='flex'>
        <Events />
        <div className='grow mx-4'>
          <div className="bg-white w-full my-3 h-10 rounded-lg border border-[#707070] flex items-center">
            <div className="ml-5 cursor-pointer active:scale-90 flex flex-row items-center">
              <div className="bg-[url(https://img.freepik.com/premium-vector/add-icon-add-post-video-photo-vector-images_292645-294.jpg?w=2000)] bg-cover rounded-full w-8 h-8" />
              <div className="font-bold text-dg text-sm">
                Create Event
              </div>
            </div>
            <div className="text-[#8C9092] font-bold ml-20">
              Your Events
            </div>
          </div>
          <Routes>
            <Route path='/page/27' element={<Preview />}></Route>
            <Route path='/page/28' element={<Congrats />}></Route>
          </Routes>
        </div>
      </div>
      <div className="flex w-full font-roboto font-bold justify-center space-x-4 fixed bottom-0 z-10">
        <NavLink className={(obj) => `${obj.isActive ? 'bg-dg text-white' : 'bg-white text-dg'} border-2 border-dg px-2 py-1 rounded-3xl active:scale-90`} to='/page/25'>Page 25</NavLink>
        <NavLink className={(obj) => `${obj.isActive ? 'bg-dg text-white' : 'bg-white text-dg'} border-2 border-dg px-2 py-1 rounded-3xl active:scale-90`} to='/page/26'>Page 26</NavLink>
        <NavLink className={(obj) => `${obj.isActive ? 'bg-dg text-white' : 'bg-white text-dg'} border-2 border-dg px-2 py-1 rounded-3xl active:scale-90`} to='/page/27'>Page 27</NavLink>
        <NavLink className={(obj) => `${obj.isActive ? 'bg-dg text-white' : 'bg-white text-dg'} border-2 border-dg px-2 py-1 rounded-3xl active:scale-90`} to='/page/28'>Page 28</NavLink>
      </div>
      <Routes>
        <Route path='/page/25' element={<Friends />}></Route>
        <Route path='/page/26' element={<BeforeSendingEvent />}></Route>
      </Routes>
    </>
  );
}

export default App;
