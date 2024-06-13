import Prop from 'prop-types';
import React from 'react';
import * as Styled from './ProfileHeader-Styles';
import { Nav } from '../Nav/Nav';
import { StyledLink } from '../elements/StyledLink/StyledLink';
import { theme } from '../../styles/theme';

export function ProfileHeader({ type }) {
  return (
    <Styled.ProfileHeaderContainer>

      {type === 'player' && (
        <Nav>
          <StyledLink path="/" text="Home" color={theme.colors.white} hovercolor={theme.colors.black} />
          <StyledLink path={`/${type}-dashboard/profile`} text="Perfil" color={theme.colors.white} hovercolor={theme.colors.black} />
          <StyledLink path={`/${type}-dashboard/opportunities`} text="Oportunidades" color={theme.colors.white} hovercolor={theme.colors.black} />
          <StyledLink path={`/${type}-dashboard/scouts`} text="Scouts" color={theme.colors.white} hovercolor={theme.colors.black} />
          <StyledLink path={`/${type}-dashboard/clubs`} text="Clubes" color={theme.colors.white} hovercolor={theme.colors.black} />
          <StyledLink path={`/${type}-dashboard/favorites`} text="Favoritos" color={theme.colors.white} hovercolor={theme.colors.black} />
          <StyledLink path={`/${type}-dashboard/contacts`} text="Contatos" color={theme.colors.white} hovercolor={theme.colors.black} />
          <StyledLink path={`/${type}-dashboard/friends`} text="Amigos" color={theme.colors.white} hovercolor={theme.colors.black} />
        </Nav>
      )}

      {type === 'club' && (
      <Nav>
        <StyledLink path="/" text="Home" color={theme.colors.white} hovercolor={theme.colors.black} />
        <StyledLink path={`/${type}-dashboard/profile`} text="Perfil" color={theme.colors.white} hovercolor={theme.colors.black} />
        <StyledLink path={`/${type}-dashboard/my-squad`} text="Plantel" color={theme.colors.white} hovercolor={theme.colors.black} />
        <StyledLink path={`/${type}-dashboard/my-opportunities`} text="Minhas oportunidades" color={theme.colors.white} hovercolor={theme.colors.black} />
        <StyledLink path={`/${type}-dashboard/scouts`} text="Scouts" color={theme.colors.white} hovercolor={theme.colors.black} />
        <StyledLink path={`/${type}-dashboard/clubs`} text="Clubes" color={theme.colors.white} hovercolor={theme.colors.black} />
        <StyledLink path={`/${type}-dashboard/players`} text="Jogadores" color={theme.colors.white} hovercolor={theme.colors.black} />
        <StyledLink path={`/${type}-dashboard/favorites`} text="Favoritos" color={theme.colors.white} hovercolor={theme.colors.black} />
        <StyledLink path={`/${type}-dashboard/contacts`} text="Contatos" color={theme.colors.white} hovercolor={theme.colors.black} />
        <StyledLink path={`/${type}-dashboard/friends`} text="Amigos" color={theme.colors.white} hovercolor={theme.colors.black} />
      </Nav>
      )}

    </Styled.ProfileHeaderContainer>
  );
}

ProfileHeader.propTypes = {
  type: Prop.string.isRequired,
};
