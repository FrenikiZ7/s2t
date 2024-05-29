import Prop from 'prop-types';
import React from 'react';
import * as Styled from './ProfileHeader-Styles';

export function ProfileHeader({ children }) {
  return (
    <Styled.ProfileHeaderContainer>
      {children}
    </Styled.ProfileHeaderContainer>
  );
}

ProfileHeader.propTypes = {
  children: Prop.node.isRequired,
};
