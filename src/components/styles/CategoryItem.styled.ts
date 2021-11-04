import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export const ImageContainer = styled.div`
  height: 230px;
  width: 100%;
  position: relative;

  img {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: contain;
    object-position: center;
  }
`;
