import { useState } from 'react'
import arrow from '../assets/images/icon-arrow-dark.svg'
import InnerDropdown from './InnerDropdown'

function Dropdown() {

    const [isOpen, setIsOpen] = useState(null)

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
                <img className='arrow' src={arrow} onClick={() => handleDropdownClick('product')}/>
                {isOpen === 'product' ? <InnerDropdown listItems={["Overview","Pricing", "Marketplace", "Features","Integration"]}/>: ""}
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