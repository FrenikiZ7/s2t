import Prop from 'prop-types';
import React from 'react';
import * as Styled from './AuthInput-Styles';

export function AuthInput({
  type, name, id, onchange, value, placeholder = 'input', title = '',
}) {
  return (
    <Styled.AuthInputContainer>
      <label htmlFor={id}>{title}</label>
      <Styled.AuthInputElement
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onchange}
        value={value}
      />
    </Styled.AuthInputContainer>

  );
}

AuthInput.propTypes = {
  type: Prop.string.isRequired,
  name: Prop.string.isRequired,
  id: Prop.string.isRequired,
  value: Prop.string.isRequired,
  title: Prop.string,
  onChange: Prop.func.isRequired,
  placeholder: Prop.string,
};
