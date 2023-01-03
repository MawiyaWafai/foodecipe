import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return ( 
        <div>
            <div >
            <Navbar variant="dark" scrolling dark expand="md" fixed="top" >
            <Container>
            <Navbar.Brand href="/" className='logo'>foodecipe</Navbar.Brand>
            </Container>
            </Navbar>
            </div>
            <p className="title">Rich Chocolate Smores</p>
            <div className="row info">
                <div className="col-3" >
                    <p className="title1">Prep Time 1H</p>
                </div>
                <div className="col-4">
                    <p className="title1">Cook Time 35Min</p>
                </div>
                <div className="col-3">
                    <p className="title1">Serving 10</p>
                </div>
            </div>
        </div>
     );
}
 
export default Header;