import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: grey;
`

const Logo = styled.img`
  height: 50px;
`

const Form = styled.form`
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

const NavBar = () => {

  return (
    <Container>
      <Logo src='../assets/images/logo.png' alt='logo' />
      <Form>
        <input type="search" placeholder="Search...">
        <button>
          <svg viewBox="0 0 1024 1024"><path class="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg>        
        </button>
      </Form>
    </Container>
)}

export default NavBar;
