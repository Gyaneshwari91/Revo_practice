import Dashboard from "./components/Dashboard";
import SideBar from "./components/SideBar";
import Home from "./components/pages/Home";
import Bookmark from "./components/pages/Bookmark";
import Downloaded from "./components/pages/Downloaded";
import Recent from "./components/pages/Recent";
import Setting from "./components/pages/Setting";
import Support from "./components/pages/Support";
import { Route, Routes } from "react-router-dom";
import { Device1page2 } from "./components/pages/Device1_page2";
function App() {
  return (
    <>
      <Dashboard />
      <SideBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ShowMore" element={<Device1page2 />} />
          <Route path="/Bookmark" element={<Bookmark />} />
          <Route path="/Downloaded" element={<Downloaded />} />
          <Route path="/Recent" element={<Recent />} />
          <Route path="/Setting" element={<Setting />} />
          <Route path="/Support" element={<Support />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
