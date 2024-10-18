import logo from '../assets/images/logo.svg'
function Footer() {
    return(
        <footer>
            <img className='logo' src={logo}/>
            <nav class="footer-links">
                <h3>Product</h3>
                <ul>
                    <a><li>Overview</li></a>
                    <a><li>Pricing</li></a>
                    <a><li>Marketplace</li></a>
                    <a><li>Features</li></a>
                    <a><li>Integrations</li></a>
                </ul>
            </nav>
            <nav class="footer-links">
                <h3>Company</h3>
                <ul>
                    <a><li>About</li></a>
                    <a><li>Team</li></a>
                    <a><li>Blog</li></a>
                    <a><li>Careers</li></a>
                </ul>
            </nav>
            <nav class="footer-links">
            <h3>Connect</h3>
                <ul>
                    <a><li>Contact</li></a>
                    <a><li>Newsletter</li></a>
                    <a><li>LinkedIn</li></a>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer