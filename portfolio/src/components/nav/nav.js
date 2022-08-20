import React, { useState } from "react";
import "./nav.css";

export default function Nav() {
  const [pinned, setPinned] = useState(false);
  const pinnedLabel = () => {
    if (pinned) return "Pinned";
    return "Pin";
  };
  return (
    <div className={pinned ? "sidenav-main pinned" : "sidenav-main"}>
      <ul>
        <li onClick={() => setPinned(!pinned)} className="nav-pin">
          {pinnedLabel()}
        </li>
        <li className="nav-li">Home</li>
        <li className="nav-li">Login</li>
      </ul>
    </div>
  );
}
