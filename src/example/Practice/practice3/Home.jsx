import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";
import "./index.css";

export default function Home(props) {
  return (
    <>
      <div className="wrap">
        <SideNav />
        {/* <h2>Home</h2> */}
        <Outlet />
      </div>
    </>
  );
}