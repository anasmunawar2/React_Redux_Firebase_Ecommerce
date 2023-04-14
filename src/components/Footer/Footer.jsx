import React from "react";
import { Container, Col, Row, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4" md="6">
            <div className="logo">
              <div>
                <h1 className="text-white">Apka Bazaar</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reprehenderit, error? Perspiciatis molestiae illum veniam ducimus
              laudantium fugit facere sint eos.
            </p>
          </Col>
          <Col lg="3" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Categories</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to="#"
                  >
                    Mobile Phones
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to="#"
                  >
                    Modern Sofa
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to="#"
                  >
                    Arm Chair
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to="#"
                  >
                    Smart Watches
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to="/shop"
                  >
                    Shop
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to="/cart"
                  >
                    Cart
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to="/login"
                  >
                    Login
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to="#"
                  >
                    Privacy Policy
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <p>123 NewYork, USA</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  <p>+00991265678</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  <p>info@apkabazaar.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className="footer__copyright">
              Copyright {year} developed by Anas Munawar. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
