import React, { useEffect } from 'react';

function Header() {
  useEffect(() => {
    const dropdowns = document.querySelectorAll('.nav-item.dropdown');
    dropdowns.forEach(dropdown => {
      const button = dropdown.querySelector('.nav-link.dropdown-toggle');
      const menu = dropdown.querySelector('.dropdown-menu');

      let clicked = false;

      button.addEventListener('click', () => {
        clicked = true;
        setTimeout(() => clicked = false, 1000); // Reset clicked status after 1 second
      });

      dropdown.addEventListener('mouseenter', () => {
        if (!clicked) {
          menu.classList.add('show');
          button.setAttribute('aria-expanded', 'true');
        }
      });

      dropdown.addEventListener('mouseleave', () => {
        menu.classList.remove('show');
        button.setAttribute('aria-expanded', 'false');
      });
    });
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className='container'>
          <a className="navbar-brand" href="#">
            <img className="header-logo" src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Footer Logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
              {/* Repeat this block for each dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle header-heading" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Chairman's Message</a></li>
                  <li><a className="dropdown-item" href="#">President's Message</a></li>
                  <li><a className="dropdown-item" href="#">Principal's Message</a></li>
                  <li><a className="dropdown-item" href="#">Founders</a></li>
                  <li><a className="dropdown-item" href="#">HKH School</a></li>
                  <li><a className="dropdown-item" href="#">School Emblem</a></li>
                  <li><a className="dropdown-item" href="#">Our Moto</a></li>
                  <li><a className="dropdown-item" href="#">Our Logo</a></li>
                  <li><a className="dropdown-item" href="#">Our Slogan</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle header-heading" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Activites
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Club & Activities</a></li>
                  <li><a className="dropdown-item" href="#">Ture & Excursion</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle header-heading" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Admission
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Registration Form</a></li>
                  <li><a className="dropdown-item" href="#">Procedures For Admisson</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle header-heading" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Facilities
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Science Laboratory</a></li>
                  <li><a className="dropdown-item" href="#">Computer Lab</a></li>
                  <li><a className="dropdown-item" href="#">Geography Lab</a></li>
                  <li><a className="dropdown-item" href="#">English Lab</a></li>
                  <li><a className="dropdown-item" href="#">Library</a></li>
                  <li><a className="dropdown-item" href="#">Smart Class Room</a></li>
                  <li><a className="dropdown-item" href="#">Conveyance</a></li>
                  <li><a className="dropdown-item" href="#">Security</a></li>
                  <li><a className="dropdown-item" href="#">Infirmary</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle header-heading" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Notices
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">News Letter</a></li>
                  <li><a className="dropdown-item" href="#">Event Calendar</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle header-heading" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Gallary
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Gallary</a></li>
                  <li><a className="dropdown-item" href="#">Alumni Page</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn-header" type="submit">Login</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
