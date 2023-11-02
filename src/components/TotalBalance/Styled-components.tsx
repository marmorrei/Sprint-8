import { styled } from 'styled-components';

export const TotalBalanceStyled = styled.section`
  width: 40%;
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: #ec765c;
  color: white;
  display: flex;
  justify-content: space-between;

  .balance {
    display: flex;
    flex-direction: column;

    p {
      margin: 1rem 0 0 0;
      font-size: 1.7rem;
    }
  }

  .week-year {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .navigation-arrows {
    display: flex;
    flex-direction: row;

    button {
      border: none;
      background-color: transparent;
    }

    img {
      width: 2rem;
    }

    img:hover {
      width: 2.5rem;
    }
  }
`;
