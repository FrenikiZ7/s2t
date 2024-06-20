import Prop from 'prop-types';
import React, { useState } from 'react';
import { StarOutline } from '@styled-icons/evaicons-outline/StarOutline';
import { Star } from '@styled-icons/evaicons-solid';
import { FavoriteBorder } from '@styled-icons/material-outlined/FavoriteBorder';
import { Favorite } from '@styled-icons/material-outlined/Favorite';

import * as Styled from './FavoriteIcon-Styles';
import { IconDiv } from '../IconDiv/IconDiv';
import { theme } from '../../../styles/theme';

export function FavoriteIcon({ isfavorite }) {
  const handleFavoriteClick = (event) => {
    // adiciona a foto clicada a lista de
    event.stopPropagation();
  };

  return (
    <Styled.FavoriteIconElement isfavorite={isfavorite}>
      <IconDiv name="Favoritar" hovercolor={theme.colors.red} onclick={handleFavoriteClick}>
        {isfavorite ? <Favorite /> : <FavoriteBorder />}
      </IconDiv>
    </Styled.FavoriteIconElement>
  );
}

FavoriteIcon.propTypes = {
  isfavorite: Prop.bool,
};
