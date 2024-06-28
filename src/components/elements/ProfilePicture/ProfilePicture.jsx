import Prop from 'prop-types';
import React from 'react';
import * as Styled from './ProfilePicture-Styles';
import { Button } from '../Button/Button';
import { theme } from '../../../styles/theme';

export function ProfilePicture({ imagesrc, badge = '', type = '' }) {
  return (
    <Styled.ProfilePictureContainer>
      <Styled.ProfilePictureElement>
        <Styled.Picture src={imagesrc} alt="Foto de perfil do usuário" />

        {badge && <Styled.Badge><img src={badge} alt="Plano que o usuário possui" /></Styled.Badge> }

      </Styled.ProfilePictureElement>
      {type && (
        <Button
          text={type}
          bgcolor={theme.colors.secondary}
          bghover={theme.colors.secondary}
          textcolor={theme.colors.black}
          texthover={theme.colors.black}
          border={theme.colors.black}
          borderhover={theme.colors.black}
        />
      )}

    </Styled.ProfilePictureContainer>

  );
}

ProfilePicture.propTypes = {
  imagesrc: Prop.string.isRequired,
  badge: Prop.string,
  type: Prop.string,
};
