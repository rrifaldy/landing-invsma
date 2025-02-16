import { useRootContext } from "@/context/context";
import navItems, { social } from "@/data/NavItems";
import useScroll from "@/hooks/useScroll";
import logo from "@/images/logo/logo4.webp";
import flagidn from "@/images/new-asset/indonesia-flag.png";
import flaguk from "@/images/new-asset/unitedkingdom-flag.png";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import NavItem from "./NavItem";

const HeaderOne = () => {
  const { scrollTop } = useScroll(130);
  const { toggleMenu, toggleSearch } = useRootContext();
  const [language, setLanguage] = useState({
    name: "Indonesia",
    flag: flagidn,
  });

  const handleSelect = (lang, flag) => {
    setLanguage({ name: lang, flag });
  };
  useEffect(() => {
    if (typeof document !== "undefined") {
      require("bootstrap/dist/js/bootstrap.bundle.min");
    }
  }, []);
  return (
    <header className="main-header clearfix">
      <div className="main-header__logo">
        <Link href="/">
          <a>
            <Image src={logo.src} alt="" className="header-logo" />
          </a>
        </Link>
      </div>
      <div className="main-menu-wrapper">
        <div className="main-menu-wrapper__top">
          <div className="main-menu-wrapper__top-inner">
            <div className="main-menu-wrapper__left">
              <div className="main-menu-wrapper__left-content">
                <div className="main-menu-wrapper__left-text">
                  <p>
                    Selamat datang di INVSMA. Layanan Urun Dana Berbasis
                    Teknologi Informasi (Securities Crowdfunding)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-menu-wrapper__bottom">
          <nav
            className={
              scrollTop
                ? "stricky-header stricked-menu main-menu stricky-fixed slideInDown animated"
                : "main-menu slideIn animated"
            }
          >
            <div
              className={
                scrollTop
                  ? "sticky-header__content main-menu__inner"
                  : "main-menu__inner"
              }
            >
              <span
                onClick={() => toggleMenu()}
                className="mobile-nav__toggler"
              >
                <i className="fa fa-bars"></i>
              </span>
              <ul className="main-menu__list">
                {navItems.map((navItem) => (
                  <NavItem key={navItem.id} navItem={navItem} />
                ))}
              </ul>
              <div className="main-menu__right">
                <div className="main-menu_change_league mr-4">
                  <div className="dropdown">
                    <button
                      className="main-menu__donate-btn dropdown-toggle d-flex align-items-center"
                      type="button"
                      id="languageDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ borderRadius: "10px" }}
                    >
                      <Image
                        src={language.flag.src}
                        alt={language.name}
                        width={14}
                        height={14}
                        className="me-2"
                      />
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="languageDropdown"
                    >
                      <li>
                        <button
                          className="dropdown-item d-flex align-items-center"
                          onClick={() => handleSelect("Indonesia", flagidn)}
                        >
                          <Image
                            src={flagidn.src}
                            alt="Indonesia"
                            width={14}
                            height={14}
                            className="me-2"
                          />
                          🇮🇩 Indonesia
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item d-flex align-items-center"
                          onClick={() => handleSelect("English", flaguk)}
                        >
                          <Image
                            src={flaguk.src}
                            alt="English"
                            width={14}
                            height={14}
                            className="me-2"
                          />
                          🇬🇧 English
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <Link href="/causes-details">
                  <a
                    className="main-menu__donate-btn"
                    style={{ borderRadius: "10px" }}
                  >
                    <i className="fa fa-user"></i>Login/Daftar Sekarang
                  </a>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;
