import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SIMG from '../Images/SIMG.png';
import CIMG from '../Images/CIMG.png';
import DIMG from '../Images/DIMG.png';
import LIMG from '../Images/LIMG.png';

const Recent = () => {
    return ( 
        <div className='recent' id="recent">
            <p className='recent-text'>Recent Recipes!</p>
            <div className='row'>
                <div className='col'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={SIMG} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button href="/Recipe">View Recipe</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={CIMG} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">View Recipe</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={DIMG} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">View Recipe</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={LIMG} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">View Recipe</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
     );
}
 
export default Recent;