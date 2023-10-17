import Logo from "../Logo";
import Wrapper from "../../assets/wrappers/BigSidebar";
import NavLinks from "../navLinks";
import { useUserContext } from "../../context/userContext";

const BigSidebar = () => {
  const { isSidebarOpen } = useUserContext();

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen
            ? "sidebar-container"
            : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};
export default BigSidebar;
