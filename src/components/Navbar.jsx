import React, { useState, useRef } from "react";
import logo from "../images/navLogo.png";
import { sections } from "../utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/**
 * Navbar component that displays a sticky header with a logo and menu items
 * @returns {JSX.Element} JSX element representing the Navbar component
 */
export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [active, setActive] = useState("");
  const sectionRefs = useRef([]);

  if (typeof window !== "undefined" && window.innerWidth < 992) {
    const variants = {
      open: { opacity: 1, y: 0 },
      closed: { opacity: 0, y: -20 },
    };
    return (
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav ">
                {/* <!-- ***** Logo Start ***** --> */}
                <Link href="/" className="logo">
                  <Image src={logo} alt="LOGO" width={100} height={100} />
                </Link>
                {/* <!-- ***** Logo End ***** --> */}
                {/* <!-- ***** Menu Start ***** --> */}

                <motion.ul
                  className="nav"
                  style={navbar ? { display: "block" } : { display: "none" }}
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
                <span
                  className={`menu-trigger ${navbar ? "active" : ""}`}
                  onClick={() => setNavbar(!navbar)}>
                  <span></span>
                </span>
                {/* <!-- ***** Menu End ***** --> */}
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  } else {
    return (
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav ">
                {/* <!-- ***** Logo Start ***** --> */}
                <Link href="/" className="logo">
                  <Image src={logo} alt="LOGO" width={100}  />
                </Link>
                {/* <!-- ***** Logo End ***** --> */}
                {/* <!-- ***** Menu Start ***** --> */}

                <motion.ul
                  className="nav"
                  style={navbar ? { display: "block" } : { display: "none" }}>
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
                <Link
                  href="#"
                  className={`menu-trigger ${navbar ? "active" : ""}`}
                  onClick={() => setNavbar(!navbar)}>
                  <span>Menu</span>
                </Link>
                {/* <!-- ***** Menu End ***** --> */}
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
