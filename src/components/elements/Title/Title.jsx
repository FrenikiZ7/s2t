import Prop from 'prop-types';
import React from 'react';
import * as Styled from './Title-Styles';

export function Title({ text, color = 'white', size = '20px' }) {
  return (
    <Styled.TitleElement color={color} size={size}>
      {text}
    </Styled.TitleElement>
  );
}

Title.propTypes = {
  text: Prop.string.isRequired,
  color: Prop.string,
  size: Prop.string,
};
