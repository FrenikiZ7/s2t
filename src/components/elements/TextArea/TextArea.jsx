import Prop from 'prop-types';
import React from 'react';
import * as Styled from './TextArea-Styles';

export function TextArea({
  placeholder = '', info = 'text-area', onChange, value,
}) {
  return (
    <Styled.TextAreaElement
      id={info}
      name={info}
      data-name={info}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      maxLength="5000"
    />
  );
}

TextArea.propTypes = {
  placeholder: Prop.string,
  info: Prop.string,
  value: Prop.string,
  onChange: Prop.func.isRequired,
};
