import React, { useContext, useState } from 'react';
import { Close as CloseIcon, Menu } from '@styled-icons/material-outlined';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import Prop from 'prop-types';
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
import { MobileNav } from '../../components/MobileNav/MobileNav';
import { GridLayout } from '../../components/GridLayout/GridLayout';
import { VerticalMiniSlide } from '../../components/elements/VerticalMiniSlide/VerticalMiniSlide';
import { VerticalSoloSlide } from '../../components/elements/VerticalSoloSlide/VerticalSoloSlide';
import { VerticalVideoSlide } from '../../components/elements/VerticalVideoSlide/VerticalVideoSlide';
import { AuthDropdown } from '../../components/elements/AuthElements/AuthDropdown/AuthDropdown';

export function Home({ islogged }) {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const [menuVisibility, setMenuVisibility] = useState(false);

  const languageOptions = [
    { value: 'portuguese-br', text: 'Português' },
    { value: 'english', text: 'Inglês' },
    { value: 'spanish', text: 'Espanhol' },
  ];

  return (
    <Styled.HomePage>

      <Header>
        <Logo size="250px" logo="/assets/images/pngs/logo.png" />

        {menuVisibility ? (
          <IconDiv name="Menu" onclick={() => setMenuVisibility(!menuVisibility)}>
            <CloseIcon />
          </IconDiv>
        ) : (
          <IconDiv name="Fechar menu" onclick={() => setMenuVisibility(!menuVisibility)}>
            <MenuIcon />
          </IconDiv>
        ) }

        <Nav>

          <AuthDropdown
            id="languageOptions"
            placeholder="Escolha o idioma"
            options={languageOptions}
          />

          {islogged ? (
            <>

              <Button
                path="/"
                text="Página principal"
                bgcolor={theme.colors.mediumblack}
                bghover={theme.colors.black}
                textcolor={theme.colors.primary}
                texthover={theme.colors.primary}
                border={theme.colors.primary}
                borderhover={theme.colors.primary}
                active
              />

              <Button
                path="/player-dashboard"
                text="Minha área"
                bgcolor={theme.colors.mediumblack}
                bghover={theme.colors.mediumblack}
                textcolor={theme.colors.white}
                texthover={theme.colors.primary}
                border={theme.colors.white}
                borderhover={theme.colors.primary}
              />
            </>
          )
            : (
              <>
                <Button
                  path="/register"
                  text="Criar uma conta"
                  bgcolor={theme.colors.lightprimary}
                  bghover={theme.colors.primary}
                  textcolor={theme.colors.black}
                  texthover={theme.colors.black}
                  border={theme.colors.lightprimary}
                  borderhover={theme.colors.primary}
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
              </>
            )}

        </Nav>
      </Header>

      {menuVisibility && (
      <MobileNav>
        <AuthDropdown
          id="languageOptions"
          placeholder="Escolha o idioma"
          options={languageOptions}
        />

          {islogged ? (
            <>

              <Button
                path="/"
                text="Página principal"
                bgcolor={theme.colors.mediumblack}
                bghover={theme.colors.black}
                textcolor={theme.colors.primary}
                texthover={theme.colors.primary}
                border={theme.colors.primary}
                borderhover={theme.colors.primary}
                active
              />

              <Button
                path="/player-dashboard"
                text="Minha área"
                bgcolor={theme.colors.mediumblack}
                bghover={theme.colors.mediumblack}
                textcolor={theme.colors.white}
                texthover={theme.colors.primary}
                border={theme.colors.white}
                borderhover={theme.colors.primary}
              />
            </>
          )
            : (
              <>
                <Button
                  path="/register"
                  text="Criar uma conta"
                  bgcolor={theme.colors.lightprimary}
                  bghover={theme.colors.primary}
                  textcolor={theme.colors.black}
                  texthover={theme.colors.black}
                  border={theme.colors.lightprimary}
                  borderhover={theme.colors.primary}
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
              </>
            )}

      </MobileNav>
      )}

      <BannerSlide backgroundimagesrc="/assets/images/backgrounds/slider-bg-1.png">
        <VerticalMiniSlide title="Eventos" type="events" items={s2tState.events} />

        {/* disparando 2 warning de thid party cookies no console */}
        <VerticalSoloSlide title="Social" size="400px" items={s2tState.news} />

        <VerticalMiniSlide title="Notícias" type="news" items={s2tState.news} />
      </BannerSlide>

      <GridLayout>
        <Button
          text="Profissional"
          bgcolor={theme.colors.black}
          textcolor={theme.colors.black}
          border={theme.colors.black}
          borderhover={theme.colors.black}
          gradient
        />

        <Button
          text="Semi-Profissional"
          bgcolor={theme.colors.black}
          textcolor={theme.colors.black}
          border={theme.colors.black}
          borderhover={theme.colors.black}
          gradient
        />

        <Button
          text="Universitário"
          bgcolor={theme.colors.black}
          textcolor={theme.colors.black}
          border={theme.colors.black}
          borderhover={theme.colors.black}
          gradient
        />

        <Button
          text="Amador"
          bgcolor={theme.colors.black}
          textcolor={theme.colors.black}
          border={theme.colors.black}
          borderhover={theme.colors.black}
          gradient
        />

        <Button
          text="Recreacional"
          bgcolor={theme.colors.black}
          textcolor={theme.colors.black}
          border={theme.colors.black}
          borderhover={theme.colors.black}
          gradient
          active
        />

      </GridLayout>

      <Slide items={s2tState.photos.usersType} />

      {/* Sendo testado (ainda com problemas) */}
      <BannerSlide title="Vídeos em alta" lazy backgroundimagesrc="/assets/images/backgrounds/slider-bg-2.png">

        <VerticalVideoSlide size="300px" items={s2tState.news} title="Profissional" />
        <VerticalVideoSlide size="300px" items={s2tState.news} title="Semi-profissional" />
        <VerticalVideoSlide size="300px" items={s2tState.news} title="Universitário" />
        <VerticalVideoSlide size="300px" items={s2tState.news} title="Amador" />
        <VerticalVideoSlide size="300px" items={s2tState.news} title="Recreacional" />

      </BannerSlide>

      <Slide items={s2tState.photos.benefits} title="Benefícios" />

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

Home.propTypes = {
  islogged: Prop.bool,
};
