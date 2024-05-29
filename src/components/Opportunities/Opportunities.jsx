import Prop from 'prop-types';
import React from 'react';
import * as Styled from './Opportunities-Styles';
import { Slide } from '../elements/Slide/Slide';

export function Opportunities({ items }) {
  return (
    <Styled.OpportunitiesContainer>
      <Slide items={items} title="Oportunidades" />
    </Styled.OpportunitiesContainer>
  );
}

Opportunities.propTypes = {
  children: Prop.node.isRequired,
};
