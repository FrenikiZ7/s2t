// import Prop from 'prop-types';
import React from 'react';
import * as Styled from './ProfileHeader-Styles';
import { Nav } from '../Nav/Nav';
import { StyledLink } from '../elements/StyledLink/StyledLink';
import { theme } from '../../styles/theme';

export function ProfileHeader() {
  return (
    <Styled.ProfileHeaderContainer>

      <Nav>
        <StyledLink path="/" text="Home" color={theme.colors.white} hovercolor={theme.colors.black} />
        <StyledLink path="/player-dashboard/profile" text="Perfil" color={theme.colors.white} hovercolor={theme.colors.black} />
        <StyledLink path="/player-dashboard/opportunities" text="Oportunidades" color={theme.colors.white} hovercolor={theme.colors.black} />
        <StyledLink path="/player-dashboard/scouts" text="Scouts" color={theme.colors.white} hovercolor={theme.colors.black} />
        <StyledLink path="/player-dashboard/clubs" text="Clubes" color={theme.colors.white} hovercolor={theme.colors.black} />
        <StyledLink path="/player-dashboard/partners" text="Parceiros" color={theme.colors.white} hovercolor={theme.colors.black} />
        <StyledLink path="/player-dashboard/contacts" text="Contatos" color={theme.colors.white} hovercolor={theme.colors.black} />
        <StyledLink path="/player-dashboard/friends" text="Amigos" color={theme.colors.white} hovercolor={theme.colors.black} />
      </Nav>

    </Styled.ProfileHeaderContainer>
  );
}

// ProfileHeader.propTypes = {
//   children: Prop.node.isRequired,
// };
