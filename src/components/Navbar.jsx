import React, { useState, useRef, useEffect } from "react";
import logo from "../images/logoNav.png";
import { sections } from "../utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const MobileMenu = ({ active, setActive, sectionRefs }) => {
  const variants = {
    open: { opacity: 0, y: 0 },
    closed: { opacity: 1, y: 20 },
  };

  const [navbar, setNavbar] = useState(false);
  return (
    <motion.ul
      className="nav"
      style={navbar ? { display: "none" } : { display: "block" }}
      variants={variants}
      animate={navbar ? "open" : "closed"}
      transition={{ duration: 0.4 }}>
      {sections.map((section, index) => (
        <motion.li whileHover={{ scale: 1.02 }} key={section.id}>
          <Link
            href={`#${section.id}`}
            className={active === section.id ? "active" : ""}
            onClick={() => setActive(section.id)}
            ref={(el) => (sectionRefs.current[index] = el)}>
            {section.name}
          </Link>
        </motion.li>
      ))}
      <motion.li whileHover={{ scale: 1.02 }}>
        <Link href="/register" className=" text-cyan-700 bg-slate-800">
          Acheter
        </Link>
      </motion.li>
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
      <div className="container h-full">
        <div className="row h-full">
          <div className="col-12 ">
            <nav className="main-nav ">
              {/* <!-- ***** Logo Start ***** --> */}
              <Link href="/" className="mx-8">
                <Image src={logo} alt="CSEN logo" width={100} height={100} />
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
                    <motion.li whileHover={{ scale: 1.06 }} key={section.id}>
                      <Link
                        href={`#${section.id}`}
                        className={active === section.id ? "active" : ""}
                        onClick={() => setActive(section.id)}
                        ref={(el) => (sectionRefs.current[index] = el)}>
                        {section.name}
                      </Link>
                    </motion.li>
                  ))}
                  <motion.li whileHover={{ scale: 1.06 }}>
                    <Link href="/register" className="text-cyan-700">
                      Acheter
                    </Link>
                  </motion.li>
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
