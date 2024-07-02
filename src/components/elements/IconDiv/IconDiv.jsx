import Prop from 'prop-types';
import React from 'react';
import { css } from 'styled-components';
import * as Styled from './IconDiv-Styles';
import { theme } from '../../../styles/theme';
import { spin360Left, spin360Right } from '../../../styles/animations';

export function IconDiv({
  children, active, activecolor = theme.colors.primary, onclick, name = 'Ícone', hovercolor = '',
}) {
  return (
    <Styled.IconContainer
      onClick={onclick}
      title={name}
      aria-label={name}
      hovercolor={hovercolor}
      active={active ? 'active' : undefined}
      activecolor={activecolor}
    >
      {children}
    </Styled.IconContainer>
  );
}

IconDiv.propTypes = {
  children: Prop.node.isRequired,
  onclick: Prop.func,
  active: Prop.bool,
  name: Prop.string,
  hovercolor: Prop.string,
  activecolor: Prop.string,
};
