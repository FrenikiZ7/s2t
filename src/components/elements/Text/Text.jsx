import Prop from 'prop-types';
import React from 'react';
import * as Styled from './Text-Styles';
import { theme } from '../../../styles/theme';

export function Text({ text, uppercase, color = theme.colors.white }) {
  return (
    <Styled.TextElement uppercase={uppercase ? 'uppercase' : 'none'} color={color}>
      {text}
    </Styled.TextElement>
  );
}

Text.propTypes = {
  text: Prop.string.isRequired,
  color: Prop.string,
  uppercase: Prop.bool,
};
