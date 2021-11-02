import React from 'react';
import { Container, Logo, Form } from './styles/NavBar.styled';
import logo from '../assets/images/logo.png';
import { AiOutlineSearch } from 'react-icons/ai';

const NavBar = () => {
  return (
    <Container>
      <a href="/">
        <Logo src={logo} alt="logo" />
      </a>

      <Form>
        <input type="search" placeholder="Find a recipe" />
        <button>
          <AiOutlineSearch className="buttonIcon" />
        </button>
      </Form>
    </Container>
  );
};

export default NavBar;
