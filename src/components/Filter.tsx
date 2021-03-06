import React, { useEffect, useState } from 'react';
import {
  Button,
  FilterContainer,
  FilterForm,
  FilterFormItems,
} from '../components/styles/Filter.styled';
import { IFilter } from '../interfaces';

const Filter = ({ setFilterCategories }: IFilter) => {
  const [allCategories, setAllCategories] = useState([]);
  const [filter, setFilter] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFilterCategories(filter);
  };

  const handleSubmitInput = (item: any) => {
    const { strArea } = item;
    const removeDuplicatesCategories = [...new Set([...filter, strArea])];
    setFilter(removeDuplicatesCategories);
  };

  useEffect(() => {
    const fetchCategories = async (): Promise<void> => {
      try {
        const result = await fetch(
          'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
        );
        const data = await result.json();
        setAllCategories(data.meals);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <FilterContainer>
      <FilterForm onSubmit={handleSubmit}>
        <FilterFormItems>
          {allCategories.map((category) => {
            const { strArea } = category;
            return (
              <div key={strArea}>
                <label htmlFor={strArea}>{strArea}</label>
                <input
                  type="checkbox"
                  id={strArea}
                  name="interest"
                  value={strArea}
                  onChange={() => handleSubmitInput({ strArea })}
                />
              </div>
            );
          })}
        </FilterFormItems>
        <Button type="submit">Filter</Button>
      </FilterForm>
    </FilterContainer>
  );
};

export default Filter;
