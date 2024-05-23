import React from 'react';
import Prop from 'prop-types';
import * as Styled from './AuthOptions-Styles';
import { theme } from '../../../../styles/theme';
import { StyledLink } from '../../StyledLink/StyledLink';

export function AuthOptions({ checkboxtext, path, pathtext }) {
  return (
    <Styled.AuthOptionsContainer>
      <label htmlFor="checkbox">
        <input type="checkbox" name="checkbox" id="checkbox" />
        <p>{checkboxtext}</p>
      </label>

      <StyledLink
        path={path}
        text={pathtext}
        color={theme.colors.secondary}
        hovercolor={theme.colors.tertiary}
      />
    </Styled.AuthOptionsContainer>
  );
}

AuthOptions.propTypes = {
  checkboxtext: Prop.string.isRequired,
  path: Prop.string.isRequired,
  pathtext: Prop.string.isRequired,
};
