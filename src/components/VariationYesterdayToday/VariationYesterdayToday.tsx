import { VariationYesterdayTodayStyled } from './Styled-components';

export default function VariationYesterdayToday() {
  return (
    <VariationYesterdayTodayStyled className='variation-yesterday-today'>
      <p>
        <strong>+2.4%</strong>
      </p>
      <span>
        <small>compared to yesterday</small>
      </span>
    </VariationYesterdayTodayStyled>
  );
}
