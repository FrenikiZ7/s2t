import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import * as Styled from './ClubDashboard-Styles';
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
import { ClubContext } from '../../../contexts/userContext/ClubProvider/ClubContext';
import { ProfileBanner } from '../../../components/elements/ProfileBanner/ProfileBanner';
import { ClubNav } from '../../../components/ProfileHeader/Components/ClubNav/ClubNav';
import { ClubMenu } from '../../../components/MobileMenu/Components/ClubMenu/ClubMenu';

export function ClubDashboard() {
  const clubContext = useContext(ClubContext);
  const { clubState, clubDispatch } = clubContext;
  const [menuVisibility, setMenuVisibility] = useState(false);

  return (
    <Styled.ClubDashboardContainer>

      <ProfileBanner backgroundimagesrc={clubState.profile.banner.backgroundImageSrc}>
        <ProfilePicture
          imagesrc={clubState.profile.banner.profileImageSrc}
          badge={clubState.profile.banner.badge}
        />
        <ProfileName name={clubState.profile.banner.name} />
        <Button
          path="/club-dashboard/profile-edit"
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
        <ClubNav />
      </ProfileHeader>

      {/* Aparece apenas em telas menores que 768px */}
      {menuVisibility ? (
        <MobileMenu onclick={() => setMenuVisibility(!menuVisibility)}>
          <ClubMenu />
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

      <S2tProvider>
        <PlayerProvider>
          <ColumnContainer color={theme.colors.black}>
            <Outlet />
          </ColumnContainer>
        </PlayerProvider>
      </S2tProvider>

      <Slide items={clubState.benefits} title="Meus benefícios" />

    </Styled.ClubDashboardContainer>
  );
}
