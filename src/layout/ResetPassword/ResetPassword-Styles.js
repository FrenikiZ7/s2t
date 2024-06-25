import styled, { css } from 'styled-components';
import { AuthContainer } from '../../components/elements/AuthElements/AuthWrapper/AuthWrapper-Styles';

export const ResetPasswordPage = styled.section`
  ${({ theme }) => css`
      background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
      ),
      url('/assets/images/background.png');

     background-position: center;
     background-size: cover;

     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;

     height: 100vh;

     ${AuthContainer} {
      max-width: 500px;
      height: auto;

      @media ${theme.medias.tablet} {
       width: 90%;
      }
     }
  `}
`;
