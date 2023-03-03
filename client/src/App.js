import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
  } from "react-router-dom";
import SideNavbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import ChattingPage from './Components/Chat';
import Notifications from './Components/Notifications';


function App() {
  return (
    <>
        <>
            <Router>
                <Routes>
                    <Route element={
                        <>
                            <div className='flex w-3/4 mx-auto'>
                            <SideNavbar/>
                            <Outlet/>
                            </div>
                        </>
                    }>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/chat' element={<ChattingPage/>}/>
                    <Route path='/notifications' element={<Notifications/>}/>
               </Route>
               <Route path='/login' element={<Login/>}/>
                </Routes>
            </Router>
        </>
    </>
  );
}

export default App;
