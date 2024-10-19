import logo from '../assets/images/logo.svg'
import hamburger from '../assets/images/icon-hamburger.svg'
import bgImg from '../assets/images/bg-pattern-intro-mobile.svg'
import Nav from './Nav'

function Header() {
    return (
        <header className='header'>
            <Nav/>
            <div className="text-content">
                <h1>A modern publishing platform</h1>
                <p>Grow your audience and build your online brand</p>
                <div className='header-btns'>
                    <button className='btn default'>Start for free</button>
                    <button className='btn inverted'>Learn more</button>
                </div>
            </div>
        </header>
    )
}

export default Header