import Prop from 'prop-types';
import React from 'react';
import { AddAPhoto as AddPhotoIcon } from '@styled-icons/material-outlined/AddAPhoto';
import * as Styled from './ProfileBanner-Styles';
import { AuthIconFile } from '../AuthElements/AuthIconFile/AuthIconFile';
import { theme } from '../../../styles/theme';
import { Button } from '../Button/Button';
import { Nav } from '../../Nav/Nav';

export function ProfileBanner({ backgroundimagesrc, children, ownerview }) {
  return (
    <Styled.ProfileBannerWrapper backgroundimagesrc={backgroundimagesrc}>

      <Nav>
        <Button
          path="/"
          text="Página principal"
          bgcolor={theme.colors.mediumblack}
          bghover={theme.colors.mediumblack}
          textcolor={theme.colors.lightprimary}
          texthover={theme.colors.primary}
          border={theme.colors.lightprimary}
          borderhover={theme.colors.primary}
        />

        <Button
          path="#"
          text="Minha área"
          bgcolor={theme.colors.mediumblack}
          bghover={theme.colors.black}
          textcolor={theme.colors.primary}
          texthover={theme.colors.primary}
          border={theme.colors.primary}
          borderhover={theme.colors.primary}
          active
        />
      </Nav>

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
