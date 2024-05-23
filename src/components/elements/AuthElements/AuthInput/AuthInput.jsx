import Prop from 'prop-types';
import React, { useState } from 'react';
import * as Styled from './AuthInput-Styles';

export function AuthInput({
  type, name, id, onChange, value, placeholder = 'input',
}) {
  return (
    <Styled.AuthInputElement
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}

AuthInput.propTypes = {
  type: Prop.string.isRequired,
  name: Prop.string.isRequired,
  id: Prop.string.isRequired,
  value: Prop.string.isRequired,
  onChange: Prop.func.isRequired,
  placeholder: Prop.string,
};
