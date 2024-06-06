import Prop from 'prop-types';
import React from 'react';
import * as Styled from './AuthRadio-Styles';

export function AuthRadio({
  title, options, groupname,
}) {
  return (
    <Styled.AuthRadioContainer>
      <Styled.AuthRadioTitle>{title}</Styled.AuthRadioTitle>
      {options.map((option) => (
        <Styled.AuthRadioElement>
          <Styled.AuthRadioInput type="radio" name={groupname} id={option.value} value={option.value} required />
          <Styled.AuthRadioLabel htmlFor={option.value}>{option.label}</Styled.AuthRadioLabel>
        </Styled.AuthRadioElement>
      ))}

    </Styled.AuthRadioContainer>
  );
}

AuthRadio.propTypes = {
  options: Prop.arrayOf(
    Prop.shape({
      value: Prop.string.isRequired,
      label: Prop.string.isRequired,
    }),
  ).isRequired,
  title: Prop.string.isRequired,
  groupname: Prop.string.isRequired,
};
