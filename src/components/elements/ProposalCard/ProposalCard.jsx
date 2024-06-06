import Prop from 'prop-types';
import React from 'react';
import * as Styled from './ProposalCard-Styles';
import { StyledLink } from '../StyledLink/StyledLink';
import { InfoInRow } from '../InfoInRow/InfoInRow';

export function ProposalCard({
  from, date, opportunity, country, org, orglogo, orgpath, category, onclick,
}) {
  return (
    <Styled.ProposalCardElement onClick={onclick}>

      <StyledLink>
        <Styled.ProposalImage src={orglogo} alt="Logo da organização" />
      </StyledLink>

      <Styled.ProposalDiv>

        <InfoInRow infotitle="Pedido de" info={from} />
        <InfoInRow infotitle="Publicada em" info={date} />
        <InfoInRow infotitle="Categoria" info={category} />

      </Styled.ProposalDiv>

      <Styled.ProposalTitle>{opportunity}</Styled.ProposalTitle>

      <Styled.ProposalDiv>
        <Styled.ProposalText>{country}</Styled.ProposalText>
        <StyledLink path={orgpath} text={org} />
      </Styled.ProposalDiv>

    </Styled.ProposalCardElement>
  );
}

ProposalCard.propTypes = {
  from: Prop.string.isRequired,
  date: Prop.string.isRequired,
  opportunity: Prop.string.isRequired,
  country: Prop.string.isRequired,
  org: Prop.string.isRequired,
  orglogo: Prop.string.isRequired,
  orgpath: Prop.string.isRequired,
  category: Prop.string.isRequired,
  onclick: Prop.func,
};
