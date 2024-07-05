import Prop from 'prop-types';
import React from 'react';
import { AddAPhoto as AddPhotoIcon } from '@styled-icons/material-outlined/AddAPhoto';
import * as Styled from './ProfileBanner-Styles';
import { AuthIconFile } from '../AuthElements/AuthIconFile/AuthIconFile';
import { theme } from '../../../styles/theme';

export function ProfileBanner({ backgroundimagesrc, children, ownerview }) {
  return (
    <Styled.ProfileBannerWrapper backgroundimagesrc={backgroundimagesrc}>

      <Styled.ProfileBannerContainer backgroundimagesrc={backgroundimagesrc}>
        {children}
      </Styled.ProfileBannerContainer>

      {ownerview && (
        <AuthIconFile id="changeBannerPicture" hovercolor={theme.colors.primary} name="Botão para alterar o banner do seu perfil">
          <AddPhotoIcon />
        </AuthIconFile>
      )}

    </Styled.ProfileBannerWrapper>
  );
}

ProfileBanner.propTypes = {
  children: Prop.node.isRequired,
  ownerview: Prop.bool,
  backgroundimagesrc: Prop.string,
};
