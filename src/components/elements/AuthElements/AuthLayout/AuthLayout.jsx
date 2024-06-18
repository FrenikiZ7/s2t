import Prop from 'prop-types';
import React from 'react';
import * as Styled from './AuthLayout-Styles';

export function AuthLayout({ children }) {
  return (
    <Styled.AuthLayoutContainer>
      {children}
    </Styled.AuthLayoutContainer>
  );
}

AuthLayout.propTypes = {
  children: Prop.node.isRequired,
};
