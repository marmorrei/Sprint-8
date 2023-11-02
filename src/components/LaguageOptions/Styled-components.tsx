import styled from 'styled-components';

export const LanguageOptionsStyled = styled.section`
  width: 43%;
  padding: 2rem 0 1rem 0;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  button {
    background-color: transparent;
    border: none;
    border-radius: 1.6rem;
    padding: 0.2rem;
  }

  button:hover {
    background-color: #ec765c99;
  }

  img {
    width: 2rem;
  }
`;
