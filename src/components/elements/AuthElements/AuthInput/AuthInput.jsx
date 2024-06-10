import Prop from 'prop-types';
import React from 'react';
import * as Styled from './AuthInput-Styles';

export function AuthInput({
  type, name, id, onchange, value, placeholder = '', title = '', autocomplete = '', required = false,
}) {
  return (
    <Styled.AuthInputContainer>
      {title}
      {' '}
      {required ? '(Obrigatório)' : ''}
      <Styled.AuthInputElement
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onchange}
        value={value}
        autoComplete={autocomplete}
        required={required}
      />
    </Styled.AuthInputContainer>

  );
}

AuthInput.propTypes = {
  type: Prop.string.isRequired,
  name: Prop.string.isRequired,
  id: Prop.string.isRequired,
  value: Prop.string,
  title: Prop.string,
  onchange: Prop.func,
  autocomplete: Prop.string,
  placeholder: Prop.string,
  required: Prop.bool,
};
