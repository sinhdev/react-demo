import React from 'react';
import { Container } from 'reactstrap';

const Footer = (props) => {
  return (
    <Container>
      <p className="m-0 text-center text-white">Copyright &copy; Your Website {new Date().getFullYear()}</p>
    </Container>
  );
};

export default Footer;