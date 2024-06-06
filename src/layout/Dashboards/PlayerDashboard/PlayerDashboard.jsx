import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import * as Styled from './PlayerDashboard-Styles';
import { PlayerContext } from '../../../contexts/userContext/PlayerProvider/PlayerContext';
import { theme } from '../../../styles/theme';

import { ProfilePicture } from '../../../components/elements/ProfilePicture/ProfilePicture';
import { ColumnContainer } from '../../../components/ColumnContainer/Column-Styles';
import { Slide } from '../../../components/elements/Slide/Slide';
import { ProfileName } from '../../../components/elements/ProfileName/ProfileName';
import { ProfileHeader } from '../../../components/ProfileHeader/ProfileHeader';
import { Nav } from '../../../components/Nav/Nav';
import { StyledLink } from '../../../components/elements/StyledLink/StyledLink';
import { Button } from '../../../components/elements/Button/Button';
import { S2tProvider } from '../../../contexts/s2tContext/S2tProvider';
import { S2tContext } from '../../../contexts/s2tContext/S2tContext';
import { PlayerProvider } from '../../../contexts/userContext/PlayerProvider/PlayerProvider';
import { MobileMenu } from '../../../components/MobileMenu/MobileMenu';
import { FloatingIcon } from '../../../components/elements/FloatingIcon/FloatingIcon';

export function PlayerDashboard() {
  const playerContext = useContext(PlayerContext);
  const { playerState, playerDispatch } = playerContext;
  const [menuVisibility, setMenuVisibility] = useState(false);

  return (
    <Styled.PlayerDashboardContainer>

      <Styled.BannerContainer backgroundimagesrc={playerState.profile.banner.backgroundImageSrc}>
        <ProfilePicture
          imagesrc={playerState.profile.banner.profileImageSrc}
          badge={playerState.profile.banner.badge}
        />
        <ProfileName name={playerState.profile.banner.name} />
        <Button
          path="/player-dashboard/profile-edit"
          text="Editar Perfil"
          bgcolor={theme.colors.primary}
          bghover={theme.colors.black}
          textcolor={theme.colors.black}
          texthover={theme.colors.primary}
          border={theme.colors.black}
          borderhover={theme.colors.primary}
        />
      </Styled.BannerContainer>

      {/* Aparece apenas em telas maiores que 768px */}
      <ProfileHeader />

      {/* Aparece apenas em telas menores que 768px */}
      {menuVisibility ? (
        <MobileMenu onclick={() => setMenuVisibility(!menuVisibility)} />
      ) : (
        <FloatingIcon
          icon={(
            <MenuIcon
              aria-label="Menu"
              title="Menu"
            />
          )}
          onclick={() => setMenuVisibility(!menuVisibility)}
        />
      )}

      <S2tProvider>
        <PlayerProvider>
          <ColumnContainer color={theme.colors.black}>
            <Outlet />
          </ColumnContainer>
        </PlayerProvider>
      </S2tProvider>

      <Slide items={playerState.benefits} title="Meus benefícios" />

    </Styled.PlayerDashboardContainer>
  );
}
