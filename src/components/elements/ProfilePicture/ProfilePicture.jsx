import Prop from 'prop-types';
import React from 'react';
import { AddAPhoto as AddPhotoIcon } from '@styled-icons/material-outlined/AddAPhoto';
import * as Styled from './ProfilePicture-Styles';
import { Button } from '../Button/Button';
import { theme } from '../../../styles/theme';
import { AuthIconFile } from '../AuthElements/AuthIconFile/AuthIconFile';

export function ProfilePicture({
  imagesrc, badge = '', type = '', ownerview,
}) {
  return (
    <Styled.ProfilePictureContainer>

      <Styled.ProfilePictureElement>
        <Styled.Picture src={imagesrc} alt="Foto de perfil do usuário" />

        {ownerview && (
        <Styled.Badge>
          <AuthIconFile id="changeProfilePicture" hovercolor={theme.colors.primary} name="Botão para alterar a foto do seu perfil">
            <AddPhotoIcon />
          </AuthIconFile>
        </Styled.Badge>
        )}

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
  ownerview: Prop.bool,
};
