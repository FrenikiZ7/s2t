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
import { Button } from '../../../components/elements/Button/Button';
import { S2tProvider } from '../../../contexts/s2tContext/S2tProvider';
import { PlayerProvider } from '../../../contexts/userContext/PlayerProvider/PlayerProvider';
import { MobileMenu } from '../../../components/MobileMenu/MobileMenu';
import { FloatingIcon } from '../../../components/elements/FloatingIcon/FloatingIcon';
import { ProfileBannerContainer } from '../../../components/elements/ProfileBanner/ProfileBanner-Styles';
import { ProfileBanner } from '../../../components/elements/ProfileBanner/ProfileBanner';
import { Column } from '../../../components/ColumnContainer/Column';
import { PlayerNav } from '../../../components/ProfileHeader/Components/PlayerNav/PlayerNav';
import { PlayerMenu } from '../../../components/MobileMenu/Components/PlayerMenu/PlayerMenu';

export function PlayerDashboard() {
  const playerContext = useContext(PlayerContext);
  const { playerState, playerDispatch } = playerContext;
  const [menuVisibility, setMenuVisibility] = useState(false);

  return (
    <Styled.PlayerDashboardContainer>

      <ProfileBanner backgroundimagesrc={playerState.profile.banner.backgroundImageSrc}>
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
      </ProfileBanner>

      {/* Aparece apenas em telas maiores que 768px */}
      <ProfileHeader>
        <PlayerNav />
      </ProfileHeader>

      {/* Aparece apenas em telas menores que 768px */}
      {menuVisibility ? (
        <MobileMenu onclick={() => setMenuVisibility(!menuVisibility)}>
          <PlayerMenu />
        </MobileMenu>
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

      {/* <S2tProvider>
        <PlayerProvider> */}
      <Column color={theme.colors.black}>
        <Outlet />
      </Column>
      {/* </PlayerProvider>
      </S2tProvider> */}

      <Slide items={playerState.benefits} title="Meus benefícios" />

    </Styled.PlayerDashboardContainer>
  );
}
