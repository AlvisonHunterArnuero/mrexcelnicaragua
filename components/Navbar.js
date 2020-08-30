import Link from "next/link";
import Branding from "./branding";
import ActiveLink from "./ActiveLink";
const Navbar = () => (
  <div>
    <nav className="navbar navbar-expand-lg nav-color">
      <style jsx>{`
        .nav-link {
          text-decoration: none;
        }
        .active:before {
          content: " ➡️";
          color: yellow !important;
        }
      `}</style>
      <Branding />
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <ActiveLink activeClassName="active" href="/about">
              <a className="nav-link text-uppercase">About</a>
            </ActiveLink>
          </li>
          <li className="nav-item">
            <ActiveLink activeClassName="active" href="/formulas">
              <a className="nav-link text-uppercase">Excel Formulas</a>
            </ActiveLink>
          </li>
          <li className="nav-item">
            <ActiveLink activeClassName="active" href="/vba">
              <a className="nav-link text-uppercase">
                Visual Basic For Applications
              </a>
            </ActiveLink>
          </li>
          <li className="nav-item">
            <ActiveLink activeClassName="active" href="/contact">
              <a className="nav-link text-uppercase">Contact</a>
            </ActiveLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Navbar;
