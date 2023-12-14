import React, { Fragment } from "react";
export default function HeaderNavbar() {
  return (
    <Fragment>
      <nav className="navbar">
        <ul className="ul-navbar-un">
          <li>SHOP</li>
          <li>CONTAVTEZ-NOUS!</li> 
        </ul>
          <img src="logo-rb.png" className="logo-brand" />
        <ul className="ul-navbar-deux">
          <li>
            <a href="#">
              <i class="bx bx-search"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-cog"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bx bxs-basket"></i>
            </a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}
