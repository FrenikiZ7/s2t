import Prop from 'prop-types';
import React from 'react';
import * as Styled from './Info-Styles';

export function Info({ infotitle, info }) {
  return (
    <Styled.InfoElement>
      <Styled.InfoTitle>{infotitle}</Styled.InfoTitle>
      <Styled.Info>{info}</Styled.Info>
    </Styled.InfoElement>
  );
}

Info.propTypes = {
  infotitle: Prop.string.isRequired,
  info: Prop.oneOfType([
    Prop.number.isRequired,
    Prop.string.isRequired,
  ]).isRequired,
};
