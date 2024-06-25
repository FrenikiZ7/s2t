import Prop from 'prop-types';
import React from 'react';
import * as Styled from './ClubNav-Styles';

import { StyledLink } from '../../../elements/StyledLink/StyledLink';
import { theme } from '../../../../styles/theme';
import { Nav } from '../../../Nav/Nav';

export function ClubNav() {
  return (
    <>
      <Styled.ClubNav>
        <StyledLink path="" text="Home" color={theme.colors.white} hovercolor={theme.colors.black} />
        <StyledLink path="profile" text="Perfil" color={theme.colors.white} hovercolor={theme.colors.black} />
        <StyledLink path="my-squad" text="Meu plantel" color={theme.colors.white} hovercolor={theme.colors.black} />
        <StyledLink path="opportunities" text="Oportunidades" color={theme.colors.white} hovercolor={theme.colors.black} />
        <StyledLink path="my-opportunities" text="Minhas oportunidades" color={theme.colors.white} hovercolor={theme.colors.black} />
        <StyledLink path="scouts" text="Scouts" color={theme.colors.white} hovercolor={theme.colors.black} />
        <StyledLink path="clubs" text="Clubes" color={theme.colors.white} hovercolor={theme.colors.black} />
      </Styled.ClubNav>

      <Styled.ClubNav>
        <StyledLink path="players" text="Jogadores" color={theme.colors.white} hovercolor={theme.colors.black} />
        <StyledLink path="events" text="Eventos" color={theme.colors.white} hovercolor={theme.colors.black} />
        <StyledLink path="favorites" text="Favoritos" color={theme.colors.white} hovercolor={theme.colors.black} />
        <StyledLink path="contacts" text="Contatos" color={theme.colors.white} hovercolor={theme.colors.black} />
        <StyledLink path="friends" text="Amigos" color={theme.colors.white} hovercolor={theme.colors.black} />
        <StyledLink path="store" text="Loja" color={theme.colors.white} hovercolor={theme.colors.black} />
        <StyledLink path="s2t+" text="S2T+" color={theme.colors.white} hovercolor={theme.colors.black} />
      </Styled.ClubNav>
    </>
  );
}

ClubNav.propTypes = {
};
