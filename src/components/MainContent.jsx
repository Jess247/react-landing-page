import designImg from '../assets/images/illustration-editor-mobile.svg'
import phonesImg from '../assets/images/illustration-phones.svg'
import bgPattern from '../assets/images/bg-pattern-circles.svg'
import laptopGraphic from '../assets/images/illustration-laptop-mobile.svg'
import Text from './Text'

function MainContent() {
    return(
        <main>
            <section className="section design">
                <h2 className='heading'>Designed for the future</h2>
                <img className='img' src={designImg}/>
            </section>
            <section className="section">
                <Text heading="Introducing an extensible editor"
                    text="Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog."/>
            </section>
            <section className="section">
                <Text heading="Robust content management "
                    text="Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control. "/>
            </section>
                <img className="img offset" src={phonesImg}/>
            <section className="section dark">
                <Text heading="State of the Art Infrastructure" text="With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive. "/>
                <img className='bg-pattern' src={bgPattern}/>
            </section>
            <section className='section' >
                <img className='img' src={laptopGraphic} alt='Graphic of a laptop.'/>
            </section>
            <section className='section'>
                <Text heading="Free, open, simple" text=" Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn."/>
            </section>
            <section className='section'>
                <Text heading="Powerful tooling" text=" Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites."/>
            </section>
        </main>
    )
}

export default MainContent