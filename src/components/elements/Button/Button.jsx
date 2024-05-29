import Prop from 'prop-types';
import React from 'react';
import * as Styled from './Button-Styles';
import { StyledLink } from '../StyledLink/StyledLink';

export function ButtonLink({
  path, text, textcolor = 'white', texthover = 'white', bgcolor = 'black', bghover = '#008EFF', border = 'black', borderhover = 'white',
}) {
  return (
    <StyledLink path={path}>
      <Styled.ButtonLinkElement
        textcolor={textcolor}
        texthover={texthover}
        bgcolor={bgcolor}
        bghover={bghover}
        border={border}
        borderhover={borderhover}
      >
        {text}
      </Styled.ButtonLinkElement>
    </StyledLink>
  );
}

ButtonLink.propTypes = {
  path: Prop.string.isRequired,
  text: Prop.string,
  textcolor: Prop.string,
  texthover: Prop.string,
  bgcolor: Prop.string,
  bghover: Prop.string,
  border: Prop.string,
  borderhover: Prop.string,

};
