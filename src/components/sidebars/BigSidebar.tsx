import Logo from "../Logo";
import Wrapper from "../../assets/wrappers/BigSidebar";
import NavLinks from "../navLinks";
import { useUserContext } from "../../context/userContext";
import bg from "../../assets/images/dog.png";

const BigSidebar = () => {
  const { isSidebarOpen } = useUserContext();

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container" : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>{/* <Logo /> */}</header>
          <NavLinks />
        </div>
        <div className="sidebar-img">
          <img src={bg} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};
export default BigSidebar;
