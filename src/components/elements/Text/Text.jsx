import Prop from 'prop-types';
import React from 'react';
import * as Styled from './Text-Styles';

export function Text({ text }) {
  return (
    <Styled.TextElement>
      {text}
    </Styled.TextElement>
  );
}

Text.propTypes = {
  text: Prop.string.isRequired,
};
