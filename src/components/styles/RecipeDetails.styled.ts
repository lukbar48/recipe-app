import styled from 'styled-components';

export const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;

  h2 {
    font-size: 2rem;
    margin: 25px 0 5px;
  }

  p {
    padding: 30px 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  height: 400px;
  width: 48%;
  position: relative;
  margin: 15px 0;
 
  img {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: contain;
    object-position: center;
  }

  @media (max-width: ${({theme}) => theme.size.tablet}) {
    width: 100%;
  };
`;

export const ListContainer = styled.ul`
  width: 48%;
  list-style: none;
  font-size: 1.3rem;

  li {
    border-bottom: 1px solid #DADADA;
    margin: 2px 0;
  }

  @media (max-width: ${({theme}) => theme.size.tablet}) {
    width: 100%;
  };
`;
