// https://www.youtube.com/watch?v=SLfhMt5OUPI

import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      {/* <nav> contains a set of navigation links */}
      {/* <a> is for hyperlinks. */}
      <a href="/" className="site-title">
        ScreenSeen
      </a>
      <ul>
        <li> Movies </li>
        <li> Lists </li>
        <li> Search </li>
      </ul>
    </nav>
  );
}

export default Navbar;
