import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navigation = () => {
    const [navSize, setnavSize] = useState("10rem");
    const [navText, setnavText] = useState("#FFFFFF");
    const [navColor, setnavColor] = useState("transparent");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("#a1ccc1") : setnavColor("transparent");
        window.scrollY > 10 ? setnavSize("5rem") : setnavSize("5rem");
        window.scrollY > 10 ? setnavText("#FFFFFF") : setnavText("#FFFFFF");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
        window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);
    return ( 
        <div className='navbar' id="naviagtion">
            <Navbar style={{backgroundColor: navColor, height: navSize, transition: "all 1s"}} variant="dark" scrolling dark expand="md" fixed="top" >
            <Container>
            <Navbar.Brand href="#top">foodecipe</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link style={{color: navText}} href="/"><AnchorLink href='#top' className='word'>Home</AnchorLink></Nav.Link>
                <Nav.Link style={{color: navText}} href="/Recent"><AnchorLink href='#recent' className='word'>Recent!</AnchorLink></Nav.Link>
                <Nav.Link style={{color: navText}} href="/Videos"><AnchorLink href='#video' className='word'>Videos</AnchorLink></Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        <p className="text">What's in your fridge?</p>
      </div>
     );
}
 
export default Navigation;