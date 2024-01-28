import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 250px;
  /* margin-bottom: 20px; */
  padding: 4px 14px;
  border-radius: 5px;

  &:hover,
  &:focus {
    outline: 1px solid blue;
  }
`;
