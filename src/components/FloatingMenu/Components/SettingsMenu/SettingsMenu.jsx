import Prop from 'prop-types';
import React from 'react';
import {
  Logout as LogoutIcon,
  Language as LanguageIcon,
  Close as CloseIcon,
} from '@styled-icons/material-outlined';
import { GridLayout } from '../../../GridLayout/GridLayout';
import { StyledLink } from '../../../elements/StyledLink/StyledLink';
import { theme } from '../../../../styles/theme';

export function SettingsMenu() {
  return (
    <GridLayout>

      <StyledLink color={theme.colors.white} hovercolor={theme.colors.primary}>
        <LanguageIcon />
        Alterar Idioma
      </StyledLink>

      <StyledLink color={theme.colors.white} hovercolor={theme.colors.primary}>
        <LogoutIcon />
        Sair da conta
      </StyledLink>

      <StyledLink color={theme.colors.white} hovercolor={theme.colors.primary}>
        <CloseIcon />
        Fechar
      </StyledLink>

    </GridLayout>
  );
}

SettingsMenu.propTypes = {
};
