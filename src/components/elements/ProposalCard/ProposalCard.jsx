import Prop from 'prop-types';
import React from 'react';
import * as Styled from './ProposalCard-Styles';
import { StyledLink } from '../StyledLink/StyledLink';
import { InfoInRow } from '../InfoInRow/InfoInRow';
import { CenterColumn } from '../../CenterColumn/CenterColumn';
import { Subtitle } from '../Subtitle/Subtitle';
import { Text } from '../Text/Text';
import { FavoriteIcon } from '../FavoriteIcon/FavoriteIcon';

export function ProposalCard({
  from = '', date = '', opportunity = '', country = '', org = '', orglogo = '', orgpath = '', category = '', onclick, publicview,
}) {
  return (
    <Styled.ProposalCardElement onClick={onclick}>

      <Styled.ProposalImage src={orglogo} alt="Logo da organização" />

      <CenterColumn>

        {from && <InfoInRow infotitle="Pedido de" info={from} />}
        {date && <InfoInRow infotitle="Publicada em" info={date} />}
        {category && <InfoInRow infotitle="Categoria" info={category} />}

      </CenterColumn>

      {opportunity && <Subtitle text={opportunity} uppercase />}

      <CenterColumn>
        {country && <Text text={country} />}
        {org && <StyledLink path={orgpath} text={org} />}
      </CenterColumn>

      {publicview && <FavoriteIcon />}

    </Styled.ProposalCardElement>
  );
}

ProposalCard.propTypes = {
  from: Prop.string,
  date: Prop.string,
  opportunity: Prop.string,
  country: Prop.string,
  org: Prop.string,
  orglogo: Prop.string,
  orgpath: Prop.string,
  category: Prop.string,
  onclick: Prop.func,
  publicview: Prop.bool,
};
