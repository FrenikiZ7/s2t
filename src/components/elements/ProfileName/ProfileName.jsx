import Prop from 'prop-types';
import React from 'react';
import * as Styled from './ProfileName-Styles';

export function ProfileName({ text }) {
  return (
    <Styled.ProfileNameElement>
      <Styled.Name>
        Nome completo
      </Styled.Name>
    </Styled.ProfileNameElement>
  );
}

ProfileName.propTypes = {
  text: Prop.string.isRequired,
};
