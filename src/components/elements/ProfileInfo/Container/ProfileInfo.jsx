import Prop from 'prop-types';
import React from 'react';
import * as Styled from './ProfileInfo-Styles';

export function ProfileInfo({ children }) {
  return (
    <Styled.ProfileInfoContainer>
      {children}
    </Styled.ProfileInfoContainer>
  );
}

ProfileInfo.propTypes = {
  children: Prop.node.isRequired,
};
