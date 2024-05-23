import Prop from 'prop-types';
import React from 'react';
import * as Styled from './Column-Styles';

export function Column({ children }) {
  return (
    <Styled.ColumnContainer>
      {children}
    </Styled.ColumnContainer>
  );
}

Column.propTypes = {
  children: Prop.node.isRequired,
};
