import Prop from 'prop-types';
import React from 'react';
import * as Styled from './Button-Styles';
import { StyledLink } from '../StyledLink/StyledLink';
import { theme } from '../../../styles/theme';

export function Button({
  onclick, gradient, active = false, path, text, textcolor = 'white', texthover = '', bgcolor = 'black', bghover = '', border = 'black', borderhover = '',
}) {
  const ButtonElement = (
    <Styled.ButtonElement
      textcolor={textcolor}
      texthover={texthover}
      bgcolor={bgcolor}
      bghover={bghover}
      border={border}
      borderhover={borderhover}
      onClick={onclick}
      active={active ? `0px 0px 5px 1px ${bghover}` : 'none'}
      gradient={gradient ? `linear-gradient(to right, ${theme.colors.lightsecondary}, ${theme.colors.lightprimary})` : `${bgcolor}`}
    >
      {text}
    </Styled.ButtonElement>
  );

  return path ? <StyledLink path={path}>{ButtonElement}</StyledLink> : ButtonElement;
}

Button.propTypes = {
  onclick: Prop.func,
  path: Prop.string,
  text: Prop.string,
  textcolor: Prop.string,
  texthover: Prop.string,
  bgcolor: Prop.string,
  bghover: Prop.string,
  border: Prop.string,
  borderhover: Prop.string,
  active: Prop.bool,
  gradient: Prop.bool,
};
