import React, { useState } from "react";
import { BsPinAngle, BsPin } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./nav.css";

export default function Nav({ setPinnedApp }) {
  const [pinned, setPinned] = useState(false);
  const pinnedLabel = () => {
    if (pinned) return <BsPin />;
    return <BsPinAngle />;
  };
  const setAllPinned = (val) => {
    setPinned(val);
    setPinnedApp(val);
  };
  return (
    <div className={pinned ? "sidenav-main pinned" : "sidenav-main"}>
      <ul>
        <li onClick={() => setAllPinned(!pinned)} className="nav-pin">
          {pinnedLabel()}
        </li>
        <li className="nav-li">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-li">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li className="nav-li">
          <Link className="nav-link" to="/code">
            Code
          </Link>
        </li>
      </ul>
    </div>
  );
}
