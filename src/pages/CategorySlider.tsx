import { useState, useEffect } from 'react';
import { ICategories } from '../interfaces';
import CategoryItem from '../components/CategoryItem';
import { SliderContainer } from '../components/styles/Container.styled';
import { StyledSlider } from '../components/styles/Slider.styled';

const CategorySlider = (): JSX.Element => {
  const [categories, setCategories] = useState<ICategories[]>([]);

  const settings = {
    dots: true,
    infinite: true,
    accessibility: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {

    const fetchCategories = async (): Promise<void> => {
      try {
        const result = await fetch(
          'https://www.themealdb.com/api/json/v1/1/categories.php'
        );
        const data = await result.json();
        setCategories(data.categories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <>
      <SliderContainer>
      <h1>Categories</h1>
        <StyledSlider {...settings}>
          {categories.length &&
            categories.map((category) => {
              return <CategoryItem key={category.idCategory} {...category} />;
            })}
        </StyledSlider>
      </SliderContainer>
    </>
  );
};

export default CategorySlider;
