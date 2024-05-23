import Prop from 'prop-types';
import React from 'react';
import * as Styled from './AuthForm-Styles';

export function AuthForm({ children }) {
  return <Styled.AuthFormContainer>{children}</Styled.AuthFormContainer>;
}

AuthForm.propTypes = {
  children: Prop.node.isRequired,
};
