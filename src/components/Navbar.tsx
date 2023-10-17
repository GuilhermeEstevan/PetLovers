import Wrapper from "../assets/wrappers/navbar";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import { useUserContext } from "../context/userContext";
import { MdPets } from "react-icons/md";
import {
  TbLayoutSidebarLeftExpand,
  TbLayoutSidebarLeftCollapse,
} from "react-icons/tb";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { toggleSidebar, isSidebarOpen } = useUserContext();

  return (
    <Wrapper>
      <div className="nav-center">
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <TbLayoutSidebarLeftExpand />
          ) : (
            <TbLayoutSidebarLeftCollapse />
          )}
        </button>
        <div>
          <h3 className="logo-text">
            Pet <span>Lovers</span>{" "}
            <span className="pawn-icon">
              <MdPets />
            </span>
          </h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => {
              setShowLogout(!showLogout);
            }}
          >
            <FaUserCircle />
            {"user"}
            <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button type="button" className="dropdown-btn">
              Logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
