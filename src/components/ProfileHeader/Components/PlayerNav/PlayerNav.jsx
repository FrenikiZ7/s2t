import Prop from 'prop-types';
import React from 'react';
import * as Styled from './PlayerNav-Styles';

import { theme } from '../../../../styles/theme';
import { StyledLink } from '../../../elements/StyledLink/StyledLink';

export function PlayerNav() {
  return (
    <Styled.PlayerNav>
      <StyledLink path="" text="Home" color={theme.colors.white} hovercolor={theme.colors.black} />
      <StyledLink path="profile" text="Perfil" color={theme.colors.white} hovercolor={theme.colors.black} />
      <StyledLink path="opportunities" text="Oportunidades" color={theme.colors.white} hovercolor={theme.colors.black} />
      <StyledLink path="scouts" text="Scouts" color={theme.colors.white} hovercolor={theme.colors.black} />
      <StyledLink path="clubs" text="Clubes" color={theme.colors.white} hovercolor={theme.colors.black} />
      <StyledLink path="favorites" text="Favoritos" color={theme.colors.white} hovercolor={theme.colors.black} />
      <StyledLink path="events" text="Eventos" color={theme.colors.white} hovercolor={theme.colors.black} />
      <StyledLink path="contacts" text="Contatos" color={theme.colors.white} hovercolor={theme.colors.black} />
      <StyledLink path="friends" text="Amigos" color={theme.colors.white} hovercolor={theme.colors.black} />
      <StyledLink path="store" text="Loja" color={theme.colors.white} hovercolor={theme.colors.black} />
      <StyledLink path="s2t+" text="S2T+" color={theme.colors.white} hovercolor={theme.colors.black} />
    </Styled.PlayerNav>
  );
}

PlayerNav.propTypes = {
};
