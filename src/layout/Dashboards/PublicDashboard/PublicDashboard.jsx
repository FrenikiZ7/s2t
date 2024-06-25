import React, { useContext, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import * as Styled from './PublicDashboard-Styles';
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
import { FavoriteIcon } from '../../../components/elements/FavoriteIcon/FavoriteIcon';
import { PublicNav } from '../../../components/ProfileHeader/Components/PublicNav/PublicNav';
import { PublicMenu } from '../../../components/MobileMenu/Components/PublicMenu/PublicMenu';

export function PublicDashboard() {
  const clubContext = useContext(ClubContext);
  const { clubState, clubDispatch } = clubContext;
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [follow, setFollow] = useState(false);

  return (
    <Styled.PublicDashboardContainer>

      <ProfileBanner backgroundimagesrc={clubState.profile.banner.backgroundImageSrc}>
        <ProfilePicture
          imagesrc={clubState.profile.banner.profileImageSrc}
          badge={clubState.profile.banner.badge}
          type="Clube"
        />
        <ProfileName name={clubState.profile.banner.name} />
        <Button
          text={follow ? 'Deixar de seguir' : 'Seguir'}
          bgcolor={theme.colors.primary}
          bghover={theme.colors.black}
          textcolor={theme.colors.black}
          texthover={theme.colors.primary}
          border={theme.colors.black}
          borderhover={theme.colors.primary}
          onclick={() => setFollow(!follow)}
        />

        <FavoriteIcon />

      </ProfileBanner>

      {/* Aparece apenas em telas maiores que 768px */}
      <ProfileHeader>
        <PublicNav />
      </ProfileHeader>

      {/* Aparece apenas em telas menores que 768px */}
      {menuVisibility ? (
        <MobileMenu onclick={() => setMenuVisibility(!menuVisibility)}>
          <PublicMenu />
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

      <Slide items={clubState.benefits} title="Benefícios do usuário" />

    </Styled.PublicDashboardContainer>
  );
}
