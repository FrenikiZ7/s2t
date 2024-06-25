import Prop from 'prop-types';
import React from 'react';
import * as Styled from './PlayerHome-Styles';
import { RankCard } from '../../../../../components/elements/RankCard/RankCard';

export function PlayerHome({ children }) {
  return (
    <Styled.PlayerHomeContainer>
      <RankCard title="Bruno da silva pedrosa" position={1} imagesrc="/assets/images/background.png" />
      <RankCard title="Caio Henrique" position={2} imagesrc="/assets/images/background.png" />
      <RankCard title="Eduardo Medeiros" position={3} imagesrc="/assets/images/background.png" />
      <RankCard title="Bruno Andrade Ferraz" position={4} imagesrc="/assets/images/background.png" />

    </Styled.PlayerHomeContainer>
  );
}

PlayerHome.propTypes = {
  children: Prop.node.isRequired,
};
