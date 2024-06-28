import Prop from 'prop-types';
import React from 'react';
import * as Styled from './MyAffiliates-Styles';
import { GridCards } from '../../../../components/elements/GridCards/GridCards';
import { TextCopy } from '../../../../components/elements/TextCopy/TextCopy';

export function MyAffiliates({ friends }) {
  return (
    <Styled.MyAffiliatesContainer>

      <TextCopy title="link de indicação" text="https://s2t.online/link/17182" />
      <GridCards title="Level 1" items={friends} />
      <GridCards title="Level 2" items={friends} />

    </Styled.MyAffiliatesContainer>
  );
}

MyAffiliates.propTypes = {

};
