import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/images/logo.svg'
import hamburger from '../assets/images/icon-hamburger.svg'
import closeIcon from '../assets/images/icon-close.svg'
import Dropdown from './Dropdown'


function Nav() {
    const [menuOpen, setMenuOpen] = useState(false)

    // Define animation variants 
    const iconVariants = {
        rest:{opacity:1, rotate:0},
        visible:{opacity:0,rotate:90},
    }

    const dropdownVariants = {
        hidden:{opacity:0 , y:-20},
        visible:{opacity:1, y:0},
        exit:{opacity:0, y:-20}
    }

    return(
        <>
            <nav className="nav">
                <img src={logo} alt="Blogr logo."/>
                    <img
                        src={menuOpen ? closeIcon : hamburger} // Toggle between hamburger and close icon
                        alt="Hamburger icon."
                        onClick={() => setMenuOpen(!menuOpen)}
                    />
            </nav>
            {menuOpen && 
            <AnimatePresence>
                <motion.div
                    key="dropdown"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                    transition={{duration: .3}}
                    style={{ zIndex: 10, position: 'relative' }}
                >
                    <Dropdown/>
                </motion.div>
            </AnimatePresence>}
        </>
)
}

export default Nav