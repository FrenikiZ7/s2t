import Prop from 'prop-types';
import React from 'react';
import * as Styled from './IconDiv-Styles';
import { theme } from '../../../styles/theme';

export function IconDiv({
  children, onclick, name, hovercolor = '',
}) {
  return (
    <Styled.IconContainer onClick={onclick} title={name} aria-label={name} hovercolor={hovercolor}>
      {children}
    </Styled.IconContainer>
  );
}

IconDiv.propTypes = {
  children: Prop.node.isRequired,
  onclick: Prop.func,
  name: Prop.string,
  hovercolor: Prop.string,
};
