import Prop from 'prop-types';
import React from 'react';
import { Check as CheckIcon } from '@styled-icons/fluentui-system-filled/Check';
import { PersonEdit as PersonEditIcon } from '@styled-icons/fluentui-system-filled/PersonEdit';
import { BookOpenGlobe as BookOpenIcon } from '@styled-icons/fluentui-system-filled/BookOpenGlobe';
import { Image as ImageIcon } from '@styled-icons/fluentui-system-filled/Image';
import { VideoAdd as VideoAddIcon } from '@styled-icons/fluentui-system-filled';
import * as Styled from './PlayerPage-Styles';
import { Title } from '../../../../components/elements/Title/Title';
import { GridLayout } from '../../../../components/GridLayout/GridLayout';
import { IconDiv } from '../../../../components/elements/IconDiv/IconDiv';
import { Subtitle } from '../../../../components/elements/Subtitle/Subtitle';
import { theme } from '../../../../styles/theme';
import { BannerSlide } from '../../../../components/elements/BannerSlide/BannerSlide';
import { IconCard } from '../../../../components/elements/IconCard/IconCard';
import { Slide } from '../../../../components/elements/Slide/Slide';
import { s2tData } from '../../../../contexts/s2tContext/s2tData';
import { Banner } from '../../../../components/elements/Banner/Banner';
import { Button } from '../../../../components/elements/Button/Button';

export function PlayerPage({ children }) {
  return (
    <Styled.PlayerPageContainer>
      <Banner backgroundimagesrc="/assets/images/backgrounds/slider-bg-1.png" gradientdirection="to top" />

      <Subtitle text="Como funciona" size={theme.sizes.huge} uppercase />

      <GridLayout>

        <IconCard>
          <CheckIcon />
          <Subtitle text="Crie sua conta" size={theme.sizes.medium} uppercase as="h3" />
        </IconCard>

        <IconCard>
          <PersonEditIcon />
          <Subtitle text="Edite seu perfil" size={theme.sizes.medium} uppercase as="h3" />
        </IconCard>

        <IconCard>
          <VideoAddIcon />
          <Subtitle text="Mostre seu talento" size={theme.sizes.medium} uppercase as="h3" />
        </IconCard>

        <IconCard>
          <BookOpenIcon />
          <Subtitle text="Busque oportunidades" size={theme.sizes.medium} uppercase as="h3" />
        </IconCard>

      </GridLayout>

      <BannerSlide slidesperview={1}>
        <img src="/assets/images/backgrounds/slider-bg-1.png" alt="" />
        <img src="/assets/images/backgrounds/slider-bg-1.png" alt="" />
        <img src="/assets/images/backgrounds/slider-bg-1.png" alt="" />
        <img src="/assets/images/backgrounds/slider-bg-1.png" alt="" />
        <img src="/assets/images/backgrounds/slider-bg-1.png" alt="" />
        <img src="/assets/images/backgrounds/slider-bg-1.png" alt="" />
      </BannerSlide>

      <Styled.Benefits>
        <Slide items={s2tData.photos.benefits} title="Benefícios exclusivos para jogadores" />
      </Styled.Benefits>

      <Banner backgroundimagesrc="/assets/images/backgrounds/slider-bg-1.png">
        <Button
          path="/register"
          text="Cadastre-se"
          bgcolor={theme.colors.mediumblack}
          bghover={theme.colors.mediumblack}
          textcolor={theme.colors.white}
          texthover={theme.colors.primary}
          border={theme.colors.white}
          borderhover={theme.colors.primary}
        />

      </Banner>

    </Styled.PlayerPageContainer>
  );
}

PlayerPage.propTypes = {
  children: Prop.node.isRequired,
};
