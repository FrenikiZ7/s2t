import Prop from 'prop-types';
import React from 'react';
import * as Styled from './AuthButton-Styles';

export function AuthButton({
  name, id, value, onclick,
}) {
  return (
    <Styled.AuthButtonElement
      type="submit"
      data-wait="Please wait..."
      name={name}
      id={id}
      value={value}
      onClick={onclick}
    />
  );
}

AuthButton.propTypes = {
  name: Prop.string.isRequired,
  id: Prop.string.isRequired,
  value: Prop.string.isRequired,
  onclick: Prop.func,
};
