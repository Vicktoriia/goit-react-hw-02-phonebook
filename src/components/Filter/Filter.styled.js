import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;
export const FilterInput = styled.input`
  width: 200px;
  height: 22px;
  padding: 0 8px;
  border: 1px solid black;
  &:hover,
  &:focus {
    border: 2px solid orange;
  }
`;
