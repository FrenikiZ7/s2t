import React, { useContext } from 'react';
import * as Styled from './Home-Styles';
import { StyledLink } from '../../components/elements/StyledLink/StyledLink';
import { theme } from '../../styles/theme';
import { Nav } from '../../components/Nav/Nav';
import { Logo } from '../../components/elements/Logo/Logo';
import { Header } from '../../components/Header/Header';
import { BannerSlide } from '../../components/elements/BannerSlide/BannerSlide';
import { Button } from '../../components/elements/Button/Button';
import { S2tContext } from '../../contexts/s2tContext/S2tContext';

export function Home() {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  return (
    <Styled.HomePage>

      <Header>
        <Logo size="250px" logo="/assets/images/pngs/logo.png" />

        <Nav>
          <Button
            path="/register"
            text="Criar uma conta"
            bgcolor={theme.colors.black}
            bghover={theme.colors.white}
            textcolor={theme.colors.white}
            texthover={theme.colors.black}
            border={theme.colors.white}
            borderhover={theme.colors.white}
          />

          <Button
            path="/login"
            text="Entrar"
            bgcolor={theme.colors.black}
            bghover={theme.colors.white}
            textcolor={theme.colors.white}
            texthover={theme.colors.black}
            border={theme.colors.white}
            borderhover={theme.colors.white}
          />

          <Button
            text="Dashboard - Jogador"
            path="/player-dashboard"
            bgcolor={theme.colors.black}
            bghover={theme.colors.primary}
            textcolor={theme.colors.primary}
            texthover={theme.colors.black}
            border={theme.colors.primary}
            borderhover={theme.colors.primary}
          />

          <Button
            text="Dashboard - Clube"
            path="/club-dashboard"
            bgcolor={theme.colors.black}
            bghover={theme.colors.primary}
            textcolor={theme.colors.primary}
            texthover={theme.colors.black}
            border={theme.colors.primary}
            borderhover={theme.colors.primary}
          />
        </Nav>
      </Header>

      ;
    </Styled.HomePage>
  );
}
