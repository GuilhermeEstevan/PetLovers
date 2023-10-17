import Wrapper from "../assets/wrappers/sharedLayout";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import SmallSidebar from "../components/sidebars/SmallSidebar";
import BigSidebar from "../components/sidebars/BigSidebar";

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;
