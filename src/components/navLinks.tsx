import links from "../utils/links";
import { NavLink } from "react-router-dom";

type TLinks = {
  id: number;
  text: string;
  path: string;
  icon: React.ReactNode;
};
type TToggleSidebar = {
  toggleSidebar?: () => void;
};

const NavLinks = ({ toggleSidebar }: TToggleSidebar) => {
  return (
    <div className="nav-links">
      {links.map((link: TLinks) => {
        const { text, path, icon, id } = link;

        if (path.startsWith("http")) {
          return (
            <a
              href={path}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              key={id}
            >
              <span className="icon">{icon}</span>
              {text}
            </a>
          );
        }

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
