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
  Star as StarIcon,
} from '@styled-icons/material-outlined';
import { PersonSearch as PersonSearchIcon } from '@styled-icons/material-outlined/PersonSearch';
import { HomeWork as HomeWorkIcon } from '@styled-icons/material-outlined/HomeWork';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import * as Styled from './MobileMenu-Styles';
import { StyledLink } from '../elements/StyledLink/StyledLink';
import { theme } from '../../styles/theme';
import { GridLayout } from '../GridLayout/GridLayout';

export function MobileMenu({ onclick, type }) {
  return (
    <Styled.MobileMenuElement onClick={onclick}>

      {type === 'player'(
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
            path={`/${type}-dashboard/profile`}
            color={theme.colors.white}
            hovercolor={theme.colors.primary}
          >
            <PersonIcon />
            Perfil

          </StyledLink>

          <StyledLink
            path={`/${type}-dashboard/opportunities`}
            color={theme.colors.white}
            hovercolor={theme.colors.primary}
          >
            <ViewCarouselIcon />
            Oportunidades

          </StyledLink>

          <StyledLink
            path={`/${type}-dashboard/scouts`}
            color={theme.colors.white}
            hovercolor={theme.colors.primary}
          >
            <WorkIcon />
            Scouts

          </StyledLink>

          <StyledLink
            path={`/${type}-dashboard/clubs`}
            color={theme.colors.white}
            hovercolor={theme.colors.primary}
          >
            <SportsSoccerIcon />
            Clubes

          </StyledLink>

          <StyledLink
            path={`/${type}-dashboard/favorites`}
            color={theme.colors.white}
            hovercolor={theme.colors.primary}
          >
            <StarIcon />
            Favoritos

          </StyledLink>

          <StyledLink
            path={`/${type}-dashboard/contacts`}
            color={theme.colors.white}
            hovercolor={theme.colors.primary}
          >
            <SendIcon />
            Contatos

          </StyledLink>

          <StyledLink
            path={`/${type}-dashboard/friends`}
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

        </GridLayout>,
      )}

      {type === 'club'(
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
            path={`/${type}-dashboard/profile`}
            color={theme.colors.white}
            hovercolor={theme.colors.primary}
          >
            <PersonIcon />
            Perfil

          </StyledLink>

          <StyledLink
            path={`/${type}-dashboard/my-opportunities`}
            color={theme.colors.white}
            hovercolor={theme.colors.primary}
          >
            <ViewCarouselIcon />
            Minhas oportunidades

          </StyledLink>

          <StyledLink
            path={`/${type}-dashboard/scouts`}
            color={theme.colors.white}
            hovercolor={theme.colors.primary}
          >
            <WorkIcon />
            Scouts

          </StyledLink>

          <StyledLink
            path={`/${type}-dashboard/clubs`}
            color={theme.colors.white}
            hovercolor={theme.colors.primary}
          >
            <SportsSoccerIcon />
            Clubes

          </StyledLink>

          <StyledLink
            path={`/${type}-dashboard/players`}
            color={theme.colors.white}
            hovercolor={theme.colors.primary}
          >
            <SportsSoccerIcon />
            Jogadores

          </StyledLink>

          <StyledLink
            path={`/${type}-dashboard/favorites`}
            color={theme.colors.white}
            hovercolor={theme.colors.primary}
          >
            <StarIcon />
            Favoritos

          </StyledLink>

          <StyledLink
            path={`/${type}-dashboard/contacts`}
            color={theme.colors.white}
            hovercolor={theme.colors.primary}
          >
            <SendIcon />
            Contatos

          </StyledLink>

          <StyledLink
            path={`/${type}-dashboard/friends`}
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

        </GridLayout>,
      )}

    </Styled.MobileMenuElement>
  );
}

MobileMenu.propTypes = {
  onclick: Prop.func,
  type: Prop.string.isRequired,
};
