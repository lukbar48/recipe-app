import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px;
  margin: 0 auto;
  border: 1px solid grey;
`;

export const FilterForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FilterFormItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;

  div {
    padding: 4px 6px;

    label {
      padding-right: 3px;
    }
  }

  @media (max-width:${({theme}) => theme.size.tablet}) {
    font-size: 0.8rem;
  }
`;

export const Button = styled.button`
  width: 85px;
  height: 35px;
  font-size: 1.1rem;
  background-color: orange;
  color: white;
  border: none;
  cursor: pointer;
  margin: 4px 6px;

  &:hover {
    opacity: 0.9;
  }
`;
