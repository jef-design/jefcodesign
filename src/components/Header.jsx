import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import { useRouter } from "next/router";
import { motion } from "framer-motion";
const easing = [0.8, -0.05, 0.01, 0.99];

const FadeUp = {
    hidden: {
        y: 30,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easing,
            // delay: .4
        },
    },
};
const stagger = {
    visible: {
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.2,
        },
    },
};
const links = [
    { linkname: "Projects", to: "/project", id: 1 },
    { linkname: "About & Skill", to: "/about", id: 2 },
    // { linkname: "Blogs", to: "/blogs", id: 3 },
];
const linkFade = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const router = useRouter();

    const Navigationfunc = () => {
        setIsOpen(!isOpen);
    };
    return (
        <React.Fragment>
            {/* <Head>
                <title>Jeff Bermejo | Front-end Developer</title>
            </Head> */}
            <motion.header
                className="header container"
                exit={{ opacity: 0 }}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="header__wrapper" variants={stagger}>
                    <i className="bx bx-menu" onClick={Navigationfunc}></i>
                    <motion.div variants={FadeUp} className="header__title">
                        <Link to="/">
                            <h2>Jefcodesign</h2>
                        </Link>
                    </motion.div>
                    <ul
                        className="nav__menu"
                        style={{ display: isOpen ? "flex" : "" }}
                    >
                        {links.map(({ linkname, to, id }) => (
                            
                            <motion.li  variants={FadeUp} onClick={Navigationfunc} key={id}>
                           <NavLink
                                to={to}
                                className={({ isActive, isPending }) =>
                                    isPending ? "" : isActive ? "active" : ""
                                }
                                >
                                    {linkname}
                            </NavLink>
                        </motion.li>
                        ))}
                        {/* <ThemeChanger /> */}
                    </ul>
                </motion.div>
                <motion.div variants={FadeUp} className="header__social">
                    <Link to="https://github.com/jef-design">
                        <i className="bx bxl-github"></i>
                    </Link>
                    <Link
                        to={`https://www.linkedin.com/in/jeffrey-bermejo-b14288217/`}
                        
                    >
                        <i className="bx bxl-linkedin"></i>
                    </Link>
                </motion.div>
            </motion.header>
        </React.Fragment>
    );
};

export default Header;

