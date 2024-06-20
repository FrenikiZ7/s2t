import Prop from 'prop-types';
import React from 'react';
import { ChevronUpOutline as ArrowUp, ArrowheadUpOutline as DoubleArrouUp } from '@styled-icons/evaicons-outline';
import { ExposurePlus1 as Plus1Icon, ExposurePlus2 as Plus2Icon } from '@styled-icons/material-outlined';
import { StarOneQuarter } from '@styled-icons/fluentui-system-filled/StarOneQuarter';
import { StarHalf, Star, StarEmphasis } from '@styled-icons/fluentui-system-filled';
import * as Styled from './RateIcons-Styles';
import { IconDiv } from '../IconDiv/IconDiv';
import { theme } from '../../../styles/theme';

export function RateIcons({ children }) {
  return (
    <Styled.RateIconsElement>
      <IconDiv name="+1" hovercolor={theme.colors.gold}>
        <StarHalf />
      </IconDiv>

      <IconDiv name="+5" hovercolor={theme.colors.gold}>
        <Star />
      </IconDiv>

      <IconDiv name="+10" hovercolor={theme.colors.gold}>
        <StarEmphasis />
      </IconDiv>
    </Styled.RateIconsElement>
  );
}

RateIcons.propTypes = {
  children: Prop.node.isRequired,
};
