import { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import arrow from '../assets/images/icon-arrow-dark.svg'
import InnerDropdown from './InnerDropdown'

function Dropdown() {

    const [isOpen, setIsOpen] = useState(null)

    const dropdownVariants = {
        hidden:{opacity:0, y:-20},
        visible:{opacity:1, y:0},
        exit:{opacity:0, y:-20}
    }

    const handleDropdownClick = (dropdown) => {
        if(isOpen === dropdown) {
            setIsOpen(null)
        } else {
            setIsOpen(dropdown)
        }
    }

    return(
        <nav class="dropdown-nav">
            <ul className="dropdown">
                <li>Product 
                <img 
                    className='arrow' 
                    src={arrow} 
                    onClick={() => handleDropdownClick('product')}/>
                {isOpen === 'product' ? 
                <AnimatePresence>
                    <motion.div
                        key="product-menu"
                        initial="hidden"
                        animate="visible"
                        variants={dropdownVariants}
                        transition={{duration: .5}}
                        >
                        <InnerDropdown listItems={["Overview","Pricing", "Marketplace", "Features","Integration"]}/>
                    </motion.div>
                </AnimatePresence>: ""}
                </li>
                <li>Company
                <img className='arrow' src={arrow} onClick={() => handleDropdownClick('company')}/>
                {isOpen === 'company' && <InnerDropdown listItems={["About", "Team", "Blog", "Careers"]}/>}
                </li>
                <li>Connect 
                <img className='arrow' src={arrow} onClick={() => handleDropdownClick('connect')}/>
                {isOpen === 'connect' && <InnerDropdown listItems={["Contact", "Newsletter", "LinkedIn"]}/>}
                </li>
            </ul>
            <div class="dropdown-btns">
                <button className="dropdown-btn">Login</button>
                <button className="dropdown-btn accent">Sign Up</button>
            </div>
        </nav>
    )
}

export default Dropdown