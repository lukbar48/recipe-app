import React from 'react';
import { useHistory } from "react-router-dom";
import { Container, Logo, Form } from './styles/NavBar.styled';
import logo from '../assets/images/logo.png';
import { AiOutlineSearch } from 'react-icons/ai';
import { INavBar } from '../interfaces';

const NavBar = ({ setRecipeSearch }: INavBar) => {
  let history = useHistory();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      searchInput: { value: string };
    };
    setRecipeSearch(formElements.searchInput.value);
    history.push('/search')
  };

  return (
    <Container>
      <a href="/">
        <Logo src={logo} alt="logo" />
      </a>

      <Form onSubmit={handleSubmit} action="/search/">
        <input type="text" id="searchInput" placeholder="Find a recipe" />
        <button type="submit">
          <AiOutlineSearch className="buttonIcon" />
        </button>
      </Form>
    </Container>
  );
};

export default NavBar;
