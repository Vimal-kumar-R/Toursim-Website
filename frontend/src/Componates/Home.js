import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';


function Home() {
  const [active, setActive] = useState(0);

  const artists=[
    {
      name: "OOTY",
      description: `"Queen of the Hills" is used to highlight the natural beauty and appeal of Ooty as a hill station. Ooty, officially known as Udhagamandalam, is a popular hill station located in the Nilgiri Hills of Tamil Nadu, India`,      
      backgroundUrl: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQiDlRWzuI07_hpNQl8ItF2Rv2qDtkeG7DeoR1L_PykebMF-il5PDE-sYLEegqy1HaY5y0Vi5TqVsVjK8-9gDGRqR7jykYrVH-k-82dKg"
    },
    {
      name: "Goa",
      description: `Best Price Guarantee — Choose from a wide range of properties which Booking.com offers. Search now! Book your Hotel in Goa online. No reservation costs. Great rates. Flight + Hotel. Apartments. Low Rates.`,
      backgroundUrl: "https://img.freepik.com/free-photo/swimming-pool_74190-2104.jpg?t=st=1716347188~exp=1716350788~hmac=b26efc3a369c5eb5232b3ac87e72f2e5e6b54940fb84f4f146a924b99250d1e8&w=740"
    },
    {
      name: "Kerala",
      description: `Kerala is a popular destination for both domestic as well as foreign tourists. Kerala is well known for its beaches, backwaters in Alappuzha and Kollam, mountain ranges and wildlife sanctuaries.`,
      backgroundUrl: "https://img.freepik.com/premium-vector/tourism-traditional-culture-with-kerala-map-india-vector_1076263-620.jpg?w=740"
    }
  ];
  
  
       return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"><img src='RLRVlogo.jpg' className='king'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
            <NavDropdown title="Destination" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/ooty">OOty</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                
              </NavDropdown.Item> 
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
           
            <NavDropdown title="Experiences" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/About">About</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>


          <Nav.Link href="#action1">VirtualTour</Nav.Link>

            <NavDropdown title="Plan Your Tour" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/fourFevPlace">4 Fev Place</NavDropdown.Item>
              <NavDropdown.Item href="/Momentpic">
                Tour Pick
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Gallary" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/Ooty">OOTY</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="RegisterNow" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/Termsand">Terms and Conditions</NavDropdown.Item>
              <NavDropdown.Item href="/Login">
                Login
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <ul style={{ display: 'flex'}}>
          {artists.map((artist, i) => (
            <li
              key={i}
              style={{ backgroundImage: `url(${artist.backgroundUrl})` }}
              role="button"
              className={active === i ? 'active' : ''}
              onClick={() => setActive(i)}
            >
              <h3>{artist.name}</h3>
              <div className="section-content">
                <div className="inner">
                  <div className="bio">
                    <h2>{artist.name}</h2>
                    <p>{artist.description}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
          
        </ul>
    
    </div>
  );
}
export default Home;
