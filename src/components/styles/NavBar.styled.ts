import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  background-color: white;
  padding: 0 60px;
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 15%);

  @media (max-width: ${({theme}) => theme.size.tablet}) {
    padding: 0 5%;
  };

`;

export const Logo = styled.img`
  height: 50px;

  @media (max-width: ${({theme}) => theme.size.mobileL}) {
    height: 40px;
  };
`;

export const Form = styled.form`
  background-color: white;
  min-width: 180px;
  width: 400px;
  height: 38px;
  border-radius: 5px;
  border: 1px grey solid;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;

  input {
    color: grey;
    height: 100%;
    width: 100%;
    padding: 6px 10px;
    border: none;
    font-size: 1rem;
    border-radius: 5px;
  }

  input::placeholder {
    color: grey;
    opacity: 0.7;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
    width: 45px;
    height: 100%;
    border: none;
    border-radius: 0 5px 5px 0;

    &:hover {
      background-color: ${({theme}) => theme.colors.main};
      color: white;
    }

    .buttonIcon {
      font-size: 30px;
    }
  }
`;
