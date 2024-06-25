import Prop from 'prop-types';
import React from 'react';
import * as Styled from './RankCard-Styles';
import { Subtitle } from '../Subtitle/Subtitle';
import { Text } from '../Text/Text';
import { StyledLink } from '../StyledLink/StyledLink';

export function RankCard({
  title, text, position, imagesrc, path,
}) {
  return (
    <Styled.RankCardContainer>
      <StyledLink path={path}>

        <Styled.RankInfo>
          <Text text={position} uppercase />
        </Styled.RankInfo>

        <Styled.RankThumbnail src={imagesrc} alt="Foto de perfil" />

        <Styled.RankInfo>
          <Text text={title} uppercase />
        </Styled.RankInfo>
      </StyledLink>

    </Styled.RankCardContainer>
  );
}

RankCard.propTypes = {
  title: Prop.oneOfType([
    Prop.string,
    Prop.number,
  ]),
  text: Prop.string,
  position: Prop.number,
  path: Prop.string,
  imagesrc: Prop.string,
};
