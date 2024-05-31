import styled, { css } from 'styled-components';

export const ProfilePictureElement = styled.div`
  ${({ theme }) => css`
      width: 230px;
      height: 230px;
      padding: ${theme.spacings.small};
      position: relative;
      border-radius: 50%; 

      @media ${theme.medias.smallpc} {
        width: 200px;
        height: 200px;
      } 


      @media ${theme.medias.mobile} {
        width: 130px;
        height: 130px;
      }

      @media ${theme.medias.smallmobile} {
        width: 100px;
        height: 100px;
      }
  `}
`;

export const Picture = styled.img`
  ${({ theme }) => css`
      border-radius: 50%;

      width: 100%;
      height: 100%;

      object-fit: cover;
  `}
`;

export const Badge = styled.div`
  ${({ theme }) => css`
      border-radius: 50%; 
      box-sizing: border-box;

      display: flex;
      align-items: end;
      justify-content: flex-end;

      width: 100%;
      height: 100%;

      position: absolute;
      top: 0px;
      left: 0px;
      bottom: 0px;
      right: 0px;

      > img {
        height: 30px;
        width: 30px;
        margin-right: 37px;
        margin-bottom: 20px;

        @media ${theme.medias.smallpc} {
          height: 25px;
          width: 25px;
          margin-right: 32px;
          margin-bottom: 18px;
       }

        @media ${theme.medias.mobile} {
          height: 20px;
          width: 20px;
          margin-right: 21px;
          margin-bottom: 13px;
       }

        @media ${theme.medias.smallmobile} {
          height: 15px;
          width: 15px;
          margin-right: 22px;
          margin-bottom: 12px;
        }
      }

  `}
`;
