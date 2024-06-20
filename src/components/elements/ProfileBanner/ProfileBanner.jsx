import Prop from 'prop-types';
import React from 'react';
import * as Styled from './ProfileBanner-Styles';

export function ProfileBanner({ backgroundimagesrc, children }) {
  return (
    <Styled.ProfileBannerContainer backgroundimagesrc={backgroundimagesrc}>
      {children}
    </Styled.ProfileBannerContainer>
  );
}

ProfileBanner.propTypes = {
  children: Prop.node.isRequired,
  backgroundimagesrc: Prop.string,
};
