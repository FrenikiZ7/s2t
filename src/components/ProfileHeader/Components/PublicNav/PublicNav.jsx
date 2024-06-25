import Prop from 'prop-types';
import React from 'react';
import * as Styled from './PublicNav-Styles';
import { StyledLink } from '../../../elements/StyledLink/StyledLink';
import { theme } from '../../../../styles/theme';

export function PublicNav() {
  return (
    <Styled.PublicNav>
      <StyledLink path="" text="Home" color={theme.colors.white} hovercolor={theme.colors.black} />
      <StyledLink path="profile" text="Perfil" color={theme.colors.white} hovercolor={theme.colors.black} />
      <StyledLink path="squad" text="Plantel" color={theme.colors.white} hovercolor={theme.colors.black} />
      <StyledLink path="opportunities" text="Oportunidades" color={theme.colors.white} hovercolor={theme.colors.black} />
      <StyledLink path="friends" text="Amigos" color={theme.colors.white} hovercolor={theme.colors.black} />
    </Styled.PublicNav>
  );
}

PublicNav.propTypes = {
};
