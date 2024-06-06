import Prop from 'prop-types';
import React from 'react';
import * as Styled from './FloatingIcon-Styles';

export function FloatingIcon({ icon, onclick }) {
  return (
    <Styled.FloatingIconElement onClick={onclick}>
      {icon}
    </Styled.FloatingIconElement>
  );
}

FloatingIcon.propTypes = {
  icon: Prop.node.isRequired,
  onclick: Prop.func,
};
