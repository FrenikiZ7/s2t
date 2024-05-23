import styled, { css } from 'styled-components';

export const ProfileInfoContainer = styled.div`
  ${({ theme }) => css`
  display: grid;
  grid-gap: 5px 30px;
  justify-content: start;
  grid-template-areas:
    "info info"
    "info info"
    "info info";


  @media ${theme.medias.tablet} {
    grid-template-areas:
    "info"
    "info"
    "info";
  }
  `}
`;
