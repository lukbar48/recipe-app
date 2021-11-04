import { ICategories } from '../interfaces';
import { Link } from 'react-router-dom';
import {Container, ImageContainer} from './styles/CategoryItem.styled'

const CategoryItem = ({
  idCategory,
  strCategory,
  strCategoryThumb,
}: ICategories): JSX.Element => {
  return (
    <Container>
      <ImageContainer>
        <Link to={`categories/${strCategory}`}>
          <img src={strCategoryThumb} alt={strCategory} />
        </Link>
      </ImageContainer>
      <a href={`categories/${strCategory}`}>
        <h2>{strCategory}</h2>
      </a>
    </Container>
  );
};

export default CategoryItem;
