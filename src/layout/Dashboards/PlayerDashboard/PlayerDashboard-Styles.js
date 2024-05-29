import styled, { css } from 'styled-components';
import { ColumnContainer } from '../../../components/ColumnContainer/Column-Styles';

export const PlayerDashboardContainer = styled.section`
  ${({ theme }) => css`
      
    ${ColumnContainer} {
      width: 100%;
      max-width: 1250px;
      margin: 0 auto;

      @media ${theme.medias.tablet} {
        width: 100%;
      }
    }

  `}
`;

export const BannerContainer = styled.section`
  ${({ theme }) => css`
  background: linear-gradient(
   to bottom,
   rgba(0, 0, 0, 0.5),
   rgba(0, 0, 0, 1)
  ),
  url('https://cdn.discordapp.com/attachments/1242525965595181209/1244735534274842634/dirty-soccer-ball-wet-grass-field-generated-by-ai.jpg?ex=66582c0d&is=6656da8d&hm=21fffae7f500ec50a631c916c01e20ceaa5d2b88e03274c3e7e70cadc8724c39&');

    background-position: center;
    background-size: cover;
    backdrop-filter: blur(10px);
    width: 100%;
    height: 350px;
    display: flex;
    color: white;
    align-items: center;
    gap: ${theme.spacings.small};

    @media${theme.medias.mobile} {
      flex-direction: column;
      justify-content: center;
      height: 250px;
    }
  `}
`;
