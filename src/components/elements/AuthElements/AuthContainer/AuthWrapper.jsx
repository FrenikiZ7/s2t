import Prop from 'prop-types';
import React from 'react';
import * as Styled from './AuthWrapper-Styles';

export function AuthWrapper({ children }) {
  return (
    <Styled.AuthWrapper>
      <Styled.AuthContainer>
        {children}
      </Styled.AuthContainer>
    </Styled.AuthWrapper>
  );
}

AuthWrapper.propTypes = {
  children: Prop.node.isRequired,
};
