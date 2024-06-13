import Prop from 'prop-types';
import React from 'react';
import * as Styled from './IconDiv-Styles';

export function IconDiv({ children, onclick, name }) {
  return (
    <Styled.IconContainer onClick={onclick} title={name} aria-label={name}>
      {children}
    </Styled.IconContainer>
  );
}

IconDiv.propTypes = {
  children: Prop.node.isRequired,
  onclick: Prop.func,
  name: Prop.string,
};
