import Prop from 'prop-types';
import React from 'react';
import { Add as AddIcon } from '@styled-icons/material-outlined/Add';
import * as Styled from './AuthIconFile-Styles';
import { IconDiv } from '../../IconDiv/IconDiv';
import { AuthForm } from '../AuthForm/AuthForm';

export function AuthIconFile({
  id, accept = 'image/*', required = false,
}) {
  return (
    <AuthForm>
      <Styled.AuthIconFileContainer htmlFor={id}>
        <IconDiv name="Adicionar mais">
          <AddIcon />
        </IconDiv>
        <Styled.AuthIconFileInput type="file" accept={accept} id={id} name={id} required={required} />
      </Styled.AuthIconFileContainer>
    </AuthForm>
  );
}

AuthIconFile.propTypes = {
  id: Prop.string.isRequired,
  accept: Prop.string,
  required: Prop.bool,
};
