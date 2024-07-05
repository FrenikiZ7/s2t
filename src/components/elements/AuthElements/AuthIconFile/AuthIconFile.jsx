import Prop from 'prop-types';
import React, { useState } from 'react';
import * as Styled from './AuthIconFile-Styles';
import { IconDiv } from '../../IconDiv/IconDiv';
import { AuthForm } from '../AuthForm/AuthForm';

export function AuthIconFile({
  id, accept = 'image/*', required = false, children, hovercolor, name,
}) {
  return (
    <AuthForm>
      <Styled.AuthIconFileContainer htmlFor={id}>
        <IconDiv name={name} hovercolor={hovercolor}>
          {children}
        </IconDiv>
        <Styled.AuthIconFileInput
          type="file"
          accept={accept}
          id={id}
          name={id}
          required={required}
        />
      </Styled.AuthIconFileContainer>
    </AuthForm>
  );
}

AuthIconFile.propTypes = {
  id: Prop.string.isRequired,
  accept: Prop.string,
  required: Prop.bool,
  children: Prop.node,
  hovercolor: Prop.string,
  name: Prop.string,
};
