import styled from 'styled-components';

export const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;

`;

export const SliderContainer = styled.div`
  position: relative;
  max-width: 900px;
  height: 320px;
  margin: 0 auto;

  h1 {
    text-align: center;
    margin: 40px auto;
    font-size: 3rem;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;

  h1 {
    margin: 40px 0 20px;
    font-size: 3rem;
  }
  @media (max-width: ${({theme}) => theme.size.tablet}) {
    h1 {
      font-size: 2.3rem;
    }
  };
`;

export const CategoryItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;