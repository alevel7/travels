import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar"

import SideNav from "./components/SideNav"

function App() {
  return (
    <div>
      <NavBar />
      <div className="bg-gray-100 flex gap-10 p-5">
        <SideNav />
        <main className="">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App
