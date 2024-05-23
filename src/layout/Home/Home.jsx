import React from 'react';
import * as Styled from './Home-Styles';
import { StyledLink } from '../../components/elements/StyledLink/StyledLink';
import { theme } from '../../styles/theme';

export function Home() {
  return (
    <Styled.HomePage>
      <StyledLink path="/register" text="Register" color={theme.colors.primary} hovercolor={theme.colors.secondary} />
      <StyledLink path="/login" text="Login" color={theme.colors.primary} hovercolor={theme.colors.secondary} />
      <StyledLink path="/profile" text="Profile" color={theme.colors.primary} hovercolor={theme.colors.secondary} />
    </Styled.HomePage>
  );
}
