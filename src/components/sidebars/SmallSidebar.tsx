import Wrapper from "../../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import Logo from "../Logo";
import NavLinks from "../navLinks";
import { useUserContext } from "../../context/userContext";

const SmallSidebar = () => {
  const { toggleSidebar, isSidebarOpen } = useUserContext();

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSidebar;
