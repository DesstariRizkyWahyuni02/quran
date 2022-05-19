import React from 'react';
import { Container,  Nav, Navbar ,Offcanvas} from "react-bootstrap";


const Navbarcomp = () => {
    return (
        <>
            {[false].map((expand) => (
                <Navbar key={expand} bg="primary" expand={expand} className="mb-3">
                    <Container fluid>
                        <Navbar.Brand href="#">API QURAN</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    API QURAN
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/Profile">Profile</Nav.Link>
                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );

}

export default Navbarcomp;