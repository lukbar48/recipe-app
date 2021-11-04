import styled from 'styled-components';

export const Container = styled.div`
  width: 270px;
  border: 1px solid grey;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 20px;
`;

export const ImageContainer = styled.div`
  height: 200px;
  width: 100%;
  position: relative;
  justify-self: flex-start;
  align-self: flex-start;

  img {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    object-position: center;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  padding: 15px;

  a {
    text-decoration: none;
    color: black;
    font-size: 0.8rem;
    font-weight: 300;
  }
`;