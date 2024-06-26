import Prop from 'prop-types';
import React from 'react';
import * as Styled from './PlayerHome-Styles';
import { RankCard } from '../../../../../components/elements/RankCard/RankCard';
import { VerticalMiniSlide } from '../../../../../components/elements/VerticalMiniSlide/VerticalMiniSlide';

export function PlayerHome({ children }) {
  return (
    <Styled.PlayerHomeContainer>
      <VerticalMiniSlide type="rank" />

    </Styled.PlayerHomeContainer>
  );
}

PlayerHome.propTypes = {
  children: Prop.node.isRequired,
};
