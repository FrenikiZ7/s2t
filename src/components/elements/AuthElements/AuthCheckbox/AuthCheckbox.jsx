import Prop from 'prop-types';
import React from 'react';
import * as Styled from './AuthCheckbox-Styles';

export function AuthCheckbox({ id, value, text = '' }) {
  return (
    <Styled.AuthCheckboxContainer>
      <Styled.AuthCheckboxInput type="checkbox" name={id} id={id} value={value} />
      {text}
    </Styled.AuthCheckboxContainer>
  );
}

AuthCheckbox.propTypes = {
  id: Prop.string.isRequired,
  value: Prop.string.isRequired,
  text: Prop.string,
};
