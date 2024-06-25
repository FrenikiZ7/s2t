import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import * as Styled from './UniversityDashboard-Styles';
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
import { UniversityContext } from '../../../contexts/userContext/UniversityProvider/UniversityContext';
import { ProfileBanner } from '../../../components/elements/ProfileBanner/ProfileBanner';
import { ClubNav } from '../../../components/ProfileHeader/Components/ClubNav/ClubNav';
import { ClubMenu } from '../../../components/MobileMenu/Components/ClubMenu/ClubMenu';

export function UniversityDashboard() {
  const universityContext = useContext(UniversityContext);
  const { universityState, universityDispatch } = universityContext;

  const [menuVisibility, setMenuVisibility] = useState(false);

  return (
    <Styled.UniversityDashboardContainer>

      <ProfileBanner backgroundimagesrc={universityState.profile.banner.backgroundImageSrc}>
        <ProfilePicture
          imagesrc={universityState.profile.banner.profileImageSrc}
          badge={universityState.profile.banner.badge}
        />
        <ProfileName name={universityState.profile.banner.name} />
        <Button
          path="/university-dashboard/profile-edit"
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
      <Slide items={universityState.benefits} title="Meus benefícios" />

    </Styled.UniversityDashboardContainer>
  );
}
