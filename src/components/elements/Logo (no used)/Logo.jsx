// import Prop from 'prop-types';
import React from 'react';
import * as Styled from './Logo-Styles';

export function Logo() {
  return (
    <Styled.LogoElement>
      <img src="/assets/images/logo.png" alt="S2T Logo" />
    </Styled.LogoElement>
  );
}

// Logo.propTypes = {
//   text: Prop.string.isRequired,
// };
