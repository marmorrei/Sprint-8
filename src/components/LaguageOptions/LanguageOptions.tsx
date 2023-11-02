import { useTranslation } from 'react-i18next';
import { LanguageOptionsStyled } from './Styled-components';

export default function LanguageOptions() {
  const { i18n } = useTranslation();
  return (
    <LanguageOptionsStyled className='language-options'>
      <button type='submit' onClick={() => i18n.changeLanguage('en')}>
        <img src='/public/assets/images/united-kingdom.png' alt='ENG' />
      </button>
      <button type='submit' onClick={() => i18n.changeLanguage('es')}>
        <img src='/public/assets/images/spain.png' alt='SPA' />
      </button>
      <button type='submit' onClick={() => i18n.changeLanguage('ca')}>
        <img src='/public/assets/images/catalonia.png' alt='CAT' />
      </button>
    </LanguageOptionsStyled>
  );
}
