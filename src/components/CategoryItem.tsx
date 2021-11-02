import styled from 'styled-components';
import { ICategories } from '../interfaces';

const Container = styled.div`
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

const ImageContainer = styled.div`
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

const CategoryItem = ({
  idCategory,
  strCategory,
  strCategoryThumb,
}: ICategories): JSX.Element => {
  return (
    <Container>
      <ImageContainer>
        <a href={`categories/${strCategory}`}>
          <img src={strCategoryThumb} alt={strCategory} />
        </a>
      </ImageContainer>
      <a href={`categories/${strCategory}`}>
        <h2>{strCategory}</h2>
      </a>
    </Container>
  );
};

export default CategoryItem;
