import Prop from 'prop-types';
import React from 'react';
import * as Styled from './ProfilePicture-Styles';
import { Button } from '../Button/Button';
import { theme } from '../../../styles/theme';

export function ProfilePicture({ imagesrc, badge = '', type = '' }) {
  return (
    <Styled.ProfilePictureElement>
      <Styled.Picture src={imagesrc} alt="Athlete profile" />
      {badge && <Styled.Badge><img src={badge} alt="Plan" /></Styled.Badge> }
      {type && (
        <Button
          text={type}
          bgcolor={theme.colors.white}
          bghover={theme.colors.white}
          textcolor={theme.colors.black}
          texthover={theme.colors.black}
          border={theme.colors.black}
          borderhover={theme.colors.black}
        />
      )}
    </Styled.ProfilePictureElement>
  );
}

ProfilePicture.propTypes = {
  imagesrc: Prop.string.isRequired,
  badge: Prop.string,
  type: Prop.string,
};
