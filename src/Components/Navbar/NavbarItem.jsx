import React from "react";
import { Link } from "react-router-dom";

function NavbarItem({ link, name, icon: IconComponent, setMenuActive }) {
  return (
    <li className="nav-item">
      <Link to={link} className="nav-link" onClick={() => setMenuActive(false)}>
        {IconComponent && <IconComponent className="nav-icon" />}
        {name}
      </Link>
    </li>
  );
}

export default NavbarItem;
