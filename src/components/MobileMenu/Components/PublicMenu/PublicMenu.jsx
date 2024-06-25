import Prop from 'prop-types';
import React from 'react';

import {
  Home as HomeIcon,
  Group as GroupIcon,
  Person as PersonIcon,
  ViewCarousel as ViewCarouselIcon,
  Send as SendIcon,
  WorkOutline as WorkIcon,
  SportsSoccer as SportsSoccerIcon,
  FavoriteBorder as FavoriteIcon,
  Hail as EventsIcon,
  PlusOne as PlusIcon,
  Handshake as HandshakeIcon,
  LocalGroceryStore as StoreIcon,
  SafetyDivider as SquadIcon,
  Close as CloseIcon,
  PersonSearch as PersonSearchIcon,
} from '@styled-icons/material-outlined';

import { StyledLink } from '../../../elements/StyledLink/StyledLink';
import { GridLayout } from '../../../GridLayout/GridLayout';
import { theme } from '../../../../styles/theme';

export function PublicMenu() {
  return (
    <GridLayout>

      <StyledLink
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <CloseIcon />

        Fechar

      </StyledLink>

    </GridLayout>
  );
}

PublicMenu.propTypes = {

};
