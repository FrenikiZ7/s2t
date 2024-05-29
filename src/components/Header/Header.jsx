import Prop from 'prop-types';
import React from 'react';
import * as Styled from './Header-Styles';

export function Header({ children }) {
  return (
    <Styled.HeaderContainer>
      {children}
    </Styled.HeaderContainer>
  );
}

Header.propTypes = {
  children: Prop.node.isRequired,
};
