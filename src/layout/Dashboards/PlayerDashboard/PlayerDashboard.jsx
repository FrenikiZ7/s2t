import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { SettingsOutline } from '@styled-icons/evaicons-outline';
import { Settings } from '@styled-icons/fluentui-system-filled';
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
import { IconDiv } from '../../../components/elements/IconDiv/IconDiv';
import { Row } from '../../../components/RowContainer/Row';
import { FloatingMenu } from '../../../components/FloatingMenu/FloatingMenu';
import { SettingsMenu } from '../../../components/FloatingMenu/Components/SettingsMenu/SettingsMenu';

export function PlayerDashboard() {
  const playerContext = useContext(PlayerContext);
  const { playerState, playerDispatch } = playerContext;
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [settingsMenuVisibility, setSettingsMenuVisibility] = useState(false);

  return (
    <Styled.PlayerDashboardContainer>

      <ProfileBanner backgroundimagesrc={playerState.profile.banner.backgroundImageSrc}>
        <ProfilePicture
          imagesrc={playerState.profile.banner.profileImageSrc}
          badge={playerState.profile.banner.badge}
        />

        <ProfileName name={playerState.profile.banner.name} />

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
            <Settings />
          </IconDiv>

          {settingsMenuVisibility && (
          <FloatingMenu onclick={() => setSettingsMenuVisibility(false)}>
            <SettingsMenu />
          </FloatingMenu>
          )}

        </Row>

      </ProfileBanner>

      <ProfileHeader>
        <PlayerNav />
      </ProfileHeader>

      {menuVisibility ? (
        <MobileMenu onclick={() => setMenuVisibility(!menuVisibility)}>
          <PlayerMenu />
        </MobileMenu>
      ) : (
        <FloatingIcon name="Menu" onclick={() => setMenuVisibility(!menuVisibility)}>
          <MenuIcon />
        </FloatingIcon>
      )}

      <Column color={theme.colors.black}>
        <Outlet />
      </Column>

      <Slide items={playerState.benefits} title="Meus benefícios" />

    </Styled.PlayerDashboardContainer>
  );
}
