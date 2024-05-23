import Prop from 'prop-types';
import React from 'react';
import * as Styled from './ProfilePicture-Styles';

export function ProfilePicture({ imagesrc, badge = '' }) {
  return (
    <Styled.ProfilePictureElement>
      <Styled.Picture src={imagesrc} alt="Athlete profile" />
      {badge && <Styled.Badge src={badge} alt="Plan" /> }
    </Styled.ProfilePictureElement>
  );
}

ProfilePicture.propTypes = {
  imagesrc: Prop.string.isRequired,
  badge: Prop.string,
};
