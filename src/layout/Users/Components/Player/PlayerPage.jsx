import Prop from 'prop-types';
import React from 'react';
import { Check as CheckIcon } from '@styled-icons/fluentui-system-filled/Check';
import { PersonEdit as PersonEditIcon } from '@styled-icons/fluentui-system-filled/PersonEdit';
import { BookOpenGlobe as BookOpenIcon } from '@styled-icons/fluentui-system-filled/BookOpenGlobe';
import * as Styled from './PlayerPage-Styles';
import { Title } from '../../../../components/elements/Title/Title';
import { GridLayout } from '../../../../components/GridLayout/GridLayout';
import { IconDiv } from '../../../../components/elements/IconDiv/IconDiv';
import { Subtitle } from '../../../../components/elements/Subtitle/Subtitle';
import { theme } from '../../../../styles/theme';
import { BannerSlide } from '../../../../components/elements/BannerSlide/BannerSlide';

export function PlayerPage({ children }) {
  return (
    <Styled.PlayerPageContainer>
      <Title text="Como funciona" uppercase />

      <GridLayout>

        <IconDiv>
          <CheckIcon />
          <Subtitle text="Crie sua conta" size={theme.sizes.medium} uppercase as="h3" />
        </IconDiv>

        <IconDiv>
          <PersonEditIcon />
          <Subtitle text="Edite seu perfil" size={theme.sizes.medium} uppercase as="h3" />
        </IconDiv>

        <IconDiv>
          <BookOpenIcon />
          <Subtitle text="Busque oportunidades" size={theme.sizes.medium} uppercase as="h3" />
        </IconDiv>

      </GridLayout>

      <BannerSlide slidesperview={1}>
        <img src="/assets/images/backgrounds/slider-bg-1.png" alt="" />
        <img src="/assets/images/backgrounds/slider-bg-1.png" alt="" />
        <img src="/assets/images/backgrounds/slider-bg-1.png" alt="" />
        <img src="/assets/images/backgrounds/slider-bg-1.png" alt="" />
        <img src="/assets/images/backgrounds/slider-bg-1.png" alt="" />
        <img src="/assets/images/backgrounds/slider-bg-1.png" alt="" />
      </BannerSlide>

    </Styled.PlayerPageContainer>
  );
}

PlayerPage.propTypes = {
  children: Prop.node.isRequired,
};
