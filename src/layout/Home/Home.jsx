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
import { Row } from '../../components/RowContainer/Row';
import { Slide } from '../../components/elements/Slide/Slide';
import { Text } from '../../components/elements/Text/Text';
import { IconDiv } from '../../components/elements/IconDiv/IconDiv';
import { SocialLink } from '../../components/elements/SocialLink/SocialLink';
import { Footer } from '../../components/Footer/Footer';

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
            bgcolor={theme.colors.darkgray}
            bghover={theme.colors.gray}
            textcolor={theme.colors.lightgray}
            texthover={theme.colors.white}
            border={theme.colors.darkgray}
            borderhover={theme.colors.gray}
          />

          <Button
            path="/login"
            text="Entrar"
            bgcolor={theme.colors.lightprimary}
            bghover={theme.colors.primary}
            textcolor={theme.colors.black}
            texthover={theme.colors.black}
            border={theme.colors.lightprimary}
            borderhover={theme.colors.primary}
          />

          <Button
            text="Dashboard - Jogador"
            path="/player-dashboard"
            bgcolor={theme.colors.lightprimary}
            bghover={theme.colors.primary}
            textcolor={theme.colors.black}
            texthover={theme.colors.black}
            border={theme.colors.lightprimary}
            borderhover={theme.colors.primary}
          />

          <Button
            text="Dashboard - Clube"
            path="/club-dashboard"
            bgcolor={theme.colors.lightprimary}
            bghover={theme.colors.primary}
            textcolor={theme.colors.black}
            texthover={theme.colors.black}
            border={theme.colors.lightprimary}
            borderhover={theme.colors.primary}
          />
        </Nav>
      </Header>

      <BannerSlide />

      <Row>
        <Button
          text="Profissional"
          bgcolor={theme.colors.black}
          textcolor={theme.colors.black}
          border={theme.colors.black}
          borderhover={theme.colors.primary}
          gradient
        />

        <Button
          text="Semi-Profissional"
          bgcolor={theme.colors.black}
          textcolor={theme.colors.black}
          border={theme.colors.black}
          borderhover={theme.colors.primary}
          gradient
        />

        <Button
          text="Amador"
          bgcolor={theme.colors.black}
          textcolor={theme.colors.black}
          border={theme.colors.black}
          borderhover={theme.colors.primary}
          gradient
        />
      </Row>

      <Slide items={s2tState.usersType} />

      <BannerSlide />

      <Slide items={s2tState.benefits} title="Benefícios" />

      <Footer>
        <Row>

          <SocialLink type="facebook" />
          <SocialLink type="instagram" />
          <SocialLink type="twitter" />
          <SocialLink type="youtube" />
          <SocialLink type="tiktok" />

        </Row>

        <Nav>
          <StyledLink text="Privacidade" color={theme.colors.lightgray} hovercolor={theme.colors.white} />
          <StyledLink text="Termos de uso" color={theme.colors.lightgray} hovercolor={theme.colors.white} />
          <StyledLink text="Sobre nós" color={theme.colors.lightgray} hovercolor={theme.colors.white} />
          <StyledLink text="Precisa de ajuda?" color={theme.colors.lightgray} hovercolor={theme.colors.white} />
        </Nav>

        <Text text="© 2024 Showcase 2 Transfer" />
      </Footer>

    </Styled.HomePage>
  );
}
