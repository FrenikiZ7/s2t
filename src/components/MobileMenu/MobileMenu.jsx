import Prop from 'prop-types';
import React from 'react';
import { Home as HomeIcon } from '@styled-icons/material-outlined/Home';
import { Person as PersonIcon } from '@styled-icons/material-outlined/Person';
import { Group as GroupIcon } from '@styled-icons/material-outlined/Group';
import {
  ViewCarousel as ViewCarouselIcon,
  Send as SendIcon,
  Work as WorkIcon,
  SportsSoccer as SportsSoccerIcon,
} from '@styled-icons/material-outlined';
import { PersonSearch as PersonSearchIcon } from '@styled-icons/material-outlined/PersonSearch';
import { HomeWork as HomeWorkIcon } from '@styled-icons/material-outlined/HomeWork';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import * as Styled from './MobileMenu-Styles';
import { StyledLink } from '../elements/StyledLink/StyledLink';
import { theme } from '../../styles/theme';
import { GridLayout } from '../GridLayout/GridLayout';

export function MobileMenu({ onclick }) {
  return (
    <Styled.MobileMenuElement onClick={onclick}>
      <GridLayout>

        <StyledLink
          path="/"
          color={theme.colors.white}
          hovercolor={theme.colors.primary}
        >
          <HomeIcon />
          Home
        </StyledLink>

        <StyledLink
          path="/player-dashboard/profile"
          color={theme.colors.white}
          hovercolor={theme.colors.primary}
        >
          <PersonIcon />
          Perfil

        </StyledLink>

        <StyledLink
          path="/player-dashboard/opportunities"
          color={theme.colors.white}
          hovercolor={theme.colors.primary}
        >
          <ViewCarouselIcon />
          Oportunidades

        </StyledLink>

        <StyledLink
          path="/player-dashboard/scouts"
          color={theme.colors.white}
          hovercolor={theme.colors.primary}
        >
          <WorkIcon />
          Scouts

        </StyledLink>

        <StyledLink
          path="/player-dashboard/clubs"
          color={theme.colors.white}
          hovercolor={theme.colors.primary}
        >
          <SportsSoccerIcon />
          Clubes

        </StyledLink>

        <StyledLink
          path="/player-dashboard/partners"
          color={theme.colors.white}
          hovercolor={theme.colors.primary}
        >
          <HomeWorkIcon />
          Parceiros

        </StyledLink>

        <StyledLink
          path="/player-dashboard/contacts"
          color={theme.colors.white}
          hovercolor={theme.colors.primary}
        >
          <SendIcon />
          Contatos

        </StyledLink>

        <StyledLink
          path="/player-dashboard/friends"
          color={theme.colors.white}
          hovercolor={theme.colors.primary}
        >
          <GroupIcon />
          Amigos

        </StyledLink>

        <StyledLink
          color={theme.colors.white}
          hovercolor={theme.colors.primary}
        >
          <CloseIcon />

          Fechar

        </StyledLink>

      </GridLayout>

    </Styled.MobileMenuElement>
  );
}

MobileMenu.propTypes = {
  onclick: Prop.func,
};
