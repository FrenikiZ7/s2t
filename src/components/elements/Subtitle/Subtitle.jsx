import Prop from 'prop-types';
import React from 'react';
import * as Styled from './Subtitle-Styles';

export function Subtitle({
  text = '', color = 'white', size = '18px', uppercase = false,
}) {
  return (
    <Styled.SubtitleElement color={color} size={size} uppercase={uppercase ? 'uppercase' : 'none'}>
      {text}
    </Styled.SubtitleElement>
  );
}

Subtitle.propTypes = {
  text: Prop.string,
  color: Prop.string,
  size: Prop.string,
  uppercase: Prop.bool,
};
