import links from "../utils/links";
import { NavLink } from "react-router-dom";

type TLinks = {
  id: number;
  text: string;
  path: string;
  icon: React.ReactNode;
};
type TToggleSidebar = {
  toggleSidebar: () => void;
};

const NavLinks = ({ toggleSidebar }: TToggleSidebar) => {
  return (
    <div className="nav-links">
      {links.map((link: TLinks) => {
        const { text, path, icon, id } = link;

        return (
          <NavLink
            to={path}
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            key={id}
            onClick={toggleSidebar}
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
