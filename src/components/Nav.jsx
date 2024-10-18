import logo from '../assets/images/logo.svg'
import hamburger from '../assets/images/icon-close.svg'
import closeIcon from '../assets/images/icon-hamburger.svg'
import Dropdown from './Dropdown'
import { useState } from 'react'


function Nav() {
    const [menuOpen, setMenuOpen] = useState(false)
    
    return(
        <>
            <nav className="nav">
                <img src={logo} alt="Blogr logo."/>
                {menuOpen ? <img src={hamburger} onClick={() => setMenuOpen(!menuOpen)}/> :
                <img src={closeIcon} onClick={() => setMenuOpen(!menuOpen)}/>}
            </nav>
            {menuOpen && <Dropdown/>}
        </>
)
}

export default Nav