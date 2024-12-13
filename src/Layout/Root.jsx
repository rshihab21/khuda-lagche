import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const Root = () => {
  return (
    <div>
      <div className="h-16">
        <Navbar />
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
