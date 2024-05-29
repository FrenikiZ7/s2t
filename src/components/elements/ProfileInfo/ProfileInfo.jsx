import Prop from 'prop-types';
import React from 'react';
import * as Styled from './ProfileInfo-Styles';
import { GridTwoColumn } from '../../GridTwoColumn/GridTwoColumn';

export function ProfileInfo({ items }) {
  console.log(items);
  return (
    <GridTwoColumn>
      {items.map((item) => (
        <Styled.ProfileInfoElement>
          <Styled.InfoTitle>{item.title}</Styled.InfoTitle>
          <Styled.Info>{item.info}</Styled.Info>
        </Styled.ProfileInfoElement>
      ))}
    </GridTwoColumn>
  );
}

ProfileInfo.propTypes = {
  items: Prop.arrayOf(Prop.object).isRequired, // n faço ideia oq é isso, só está assim pq foi o unico q n deu erro no console
};
