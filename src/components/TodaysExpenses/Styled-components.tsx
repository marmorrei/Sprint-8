import styled from 'styled-components';

export const TodaysExpensesStyled = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: #c3c4c1;
  }

  p {
    margin: 0.4rem 0 0 0;
    font-size: 2rem;
  }

  .current-day-navigation {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 0.2rem;

    p {
      margin: 0.2rem 0;
      font-size: 0.8rem;
      color: #c3c4c1;
    }

    button {
      background-color: #ec765c;
      border: none;
      border-radius: 1rem;
      margin: 0 0.5rem;
      padding: 0.2rem 0.5rem;
    }

    img {
      width: 1.5rem;
    }
  }
`;
