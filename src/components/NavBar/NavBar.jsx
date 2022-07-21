import { Link } from "react-router-dom";
import "./navbar.css";
import Signup from "../../pages/Signup/Signup";
import Login from "../../pages/Login/Login";

import ChangePassword from "../../pages/ChangePassword/ChangePassword";
import { ChevronLeft } from "@mui/icons-material";

const NavBar = ({
  user,
  handleLogout,
  handleSignupOrLogin,
  handleSideBarOpen,
  handleSideBarClose,
  open,
}) => {
  return (
    <>
      {user ? (
        <nav className=" navbar-container |">
          <h1 className="navbar-title |">SuiteSpace | <span className="text-lg">{user.name}</span></h1>
          <div className="navbar-buttons-container">
            <div>
              <button onClick={handleLogout} className="nav-button | rounded ">
                Log Out
              </button>
            </div>
            <div>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </div>
          </div>
          <div
            className="app-toggle-sidebar-container"
            style={open ? { display: "none" } : { display: "flex" }}
          >
            <div
              className="app-toggle-sidebar | group"
              onClick={
                open ? () => handleSideBarClose() : () => handleSideBarOpen()
              }
            >
              <ChevronLeft fontSize="large" />
              <span className="sidebar-tooltip | group-hover:scale-100 scale-0">
                Open Sidebar
              </span>
            </div>
          </div>
        </nav>
      ) : (
        <nav className=" navbar-container |">
          <h1 className="navbar-title | text-2xl">SuiteSpace</h1>
          <ul className="navbar-buttons-container">
            <li>
              <Login handleSignupOrLogin={handleSignupOrLogin} />
            </li>
            <li>
              <Signup handleSignupOrLogin={handleSignupOrLogin} />
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavBar;
