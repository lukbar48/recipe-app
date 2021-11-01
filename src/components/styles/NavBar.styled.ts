import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: grey;
`

export const Logo = styled.img`
  height: 50px;
`

export const Form = styled.form`
  background-color: #4654e1;
  width: 300px;
  height: 44px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  
  input {
    all: unset;
    color: #fff;
    height: 100%;
    width: 100%;
    padding: 6px 10px;
  }
  
  input::placeholder {
    color: grey;
    opacity: 0.7; 
  }
  button {
    all: unset;
    cursor: pointer;
    width: 44px;
    height: 44px;
    
    
    svg {
      color: #fff;
      fill: currentColor;
      width: 24px;
      height: 24px;
      padding: 10px;
     }
  }
`
