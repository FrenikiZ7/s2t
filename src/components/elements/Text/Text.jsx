import Prop from 'prop-types';
import React from 'react';
import * as Styled from './Text-Styles';

export function Text({ text, uppercase }) {
  return (
    <Styled.TextElement uppercase={uppercase ? 'uppercase' : 'none'}>
      {text}
    </Styled.TextElement>
  );
}

Text.propTypes = {
  text: Prop.string.isRequired,
  uppercase: Prop.bool,
};
