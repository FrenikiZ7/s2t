import Prop from 'prop-types';
import React, { useContext } from 'react';
import * as Styled from './Banner-Styles';
import { VerticalMiniSlide } from '../VerticalMiniSlide/VerticalMiniSlide';
import { S2tContext } from '../../../contexts/s2tContext/S2tContext';

export function Banner({ children }) {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  return (
    <Styled.BannerContainer />
  );
}

Banner.propTypes = {
  children: Prop.node.isRequired,
};
