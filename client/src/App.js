import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import SideNavbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import ChattingPage from "./Components/Chat";
import Notifications from "./Components/Notifications";

function App() {
  return (
    <>
      <>
        <div className="bg-white dark:bg-[#000000]">
          <Router>
            <Routes>
              <Route
                element={
                  <>
                    <div className="flex md:flex-row flex-col">
                      <SideNavbar />
                      <Outlet />
                    </div>
                  </>
                }
              >
                <Route path="/home" element={<Home />} />
                <Route path="/messages" element={<ChattingPage />} />
                <Route path="/notifications" element={<Notifications />} />
              </Route>
              <Route path="/" element={<Login />} />
            </Routes>
          </Router>
        </div>
      </>
    </>
  );
}

export default App;
