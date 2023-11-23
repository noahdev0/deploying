import React, { useState, useRef, useEffect } from "react";
import logo from "../images/navLogo.png";
import { sections } from "../utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const MobileMenu = ({ active, setActive, sectionRefs }) => {
  const variants = {
    open: { opacity: 0, y: -20 },
    closed: { opacity: 1, y: 0 },
  };
  const [navbar, setNavbar] = useState(false);
  return (
    <motion.ul
      className="nav"
      style={navbar ? { display: "none" } : { display: "block" }}
      variants={variants}
      animate={navbar ? "open" : "closed"}
      transition={{ duration: 0.3 }}>
      {sections.map((section, index) => (
        <motion.li whileHover={{ scale: 1.1 }} key={section.id}>
          <Link
            href={`#${section.id}`}
            className={active === section.id ? "active" : ""}
            onClick={() => setActive(section.id)}
            ref={(el) => (sectionRefs.current[index] = el)}>
            {section.name}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* <!-- ***** Logo Start ***** --> */}
              <Link href="/" className="logo">
                <Image src={logo} alt="LOGO" width={100} />
              </Link>
              {/* <!-- ***** Logo End ***** --> */}
              {/* <!-- ***** Menu Start ***** --> */}
              {isMobileMenuOpen ? (
                <MobileMenu
                  active={active}
                  setActive={setActive}
                  sectionRefs={sectionRefs}
                />
              ) : (
                <ul className="nav">
                  {sections.map((section, index) => (
                    <motion.li whileHover={{ scale: 1.1 }} key={section.id}>
                      <Link
                        href={`#${section.id}`}
                        className={active === section.id ? "active" : ""}
                        onClick={() => setActive(section.id)}
                        ref={(el) => (sectionRefs.current[index] = el)}>
                        {section.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              )}
              <span
                className={`menu-trigger ${isMobileMenuOpen ? "active" : ""}`}
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                <span></span>
              </span>
              {/* <!-- ***** Menu End ***** --> */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
