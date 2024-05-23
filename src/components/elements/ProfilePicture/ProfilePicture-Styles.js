import styled, { css } from 'styled-components';

export const ProfilePictureElement = styled.div`
  ${({ theme }) => css`
      width: 300px;
      height: 300px;
      padding: ${theme.spacings.small};

      @media ${theme.medias.mobile} {
        width: 130px;
        height: 130px;
      }
  `}
`;

export const Picture = styled.img`
  ${({ theme }) => css`
      border-radius: 50%;

      width: 100%;
      height: 100%;

      position: relative;
      object-fit: cover;
  `}
`;

export const Badge = styled.img`
  ${({ theme }) => css`
      border-radius: 50%;

      height: 50px;
      width: 50px;

      position: absolute;
      top: 228px;
      left: 210px;

      @media ${theme.medias.mobile} {
        top: 95px;
        left: 88px;
        height: 20px;
        width: 20px;
      }
  `}
`;
