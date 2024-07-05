import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Settings as SettingsIcon } from '@styled-icons/fluentui-system-filled';
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
import { UniversityNav } from '../../../components/ProfileHeader/Components/UniversityNav/UniversityNav';
import { Row } from '../../../components/RowContainer/Row';
import { IconDiv } from '../../../components/elements/IconDiv/IconDiv';
import { FloatingMenu } from '../../../components/FloatingMenu/FloatingMenu';
import { SettingsMenu } from '../../../components/FloatingMenu/Components/SettingsMenu/SettingsMenu';

export function UniversityDashboard() {
  const universityContext = useContext(UniversityContext);
  const { universityState, universityDispatch } = universityContext;

  const [menuVisibility, setMenuVisibility] = useState(false);
  const [settingsMenuVisibility, setSettingsMenuVisibility] = useState(false);

  return (
    <Styled.UniversityDashboardContainer>

      <ProfileBanner backgroundimagesrc={universityState.profile.banner.backgroundImageSrc} ownerview>
        <ProfilePicture
          imagesrc={universityState.profile.banner.profileImageSrc}
          badge={universityState.profile.banner.badge}
          ownerview
        />
        <ProfileName name={universityState.profile.banner.name} />
        <Row>
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
          <IconDiv active={settingsMenuVisibility} hovercolor={theme.colors.primary} name="Configurações" onclick={() => setSettingsMenuVisibility(!settingsMenuVisibility)}>
            <SettingsIcon />
          </IconDiv>

          {settingsMenuVisibility && (
          <FloatingMenu onclick={() => setSettingsMenuVisibility(false)}>
            <SettingsMenu />
          </FloatingMenu>
          )}

        </Row>
      </ProfileBanner>

      {/* Aparece apenas em telas maiores que 768px */}
      <ProfileHeader>
        <UniversityNav />
      </ProfileHeader>

      {/* Aparece apenas em telas menores que 768px */}
      {menuVisibility ? (
        <MobileMenu onclick={() => setMenuVisibility(!menuVisibility)}>
          <ClubMenu />
        </MobileMenu>
      ) : (
        <FloatingIcon name="Menu" onclick={() => setMenuVisibility(!menuVisibility)}>
          <MenuIcon />
        </FloatingIcon>
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
