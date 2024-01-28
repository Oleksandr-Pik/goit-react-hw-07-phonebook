import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  outline: 1px solid;
  padding: 30px;
  /* padding: 4px 14px; */
  border-radius: 5px;
`;

export const Input = styled.input`
  width: 250px;
  margin-bottom: 20px;
  padding: 4px 14px;
  border-radius: 5px;

  &:hover,
  &:focus {
    outline: 1px solid blue;
  }
`;

export const Button = styled.button`
  width: fit-content;
  cursor: pointer;
`;
