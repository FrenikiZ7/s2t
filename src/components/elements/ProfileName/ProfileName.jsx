import Prop from 'prop-types';
import React from 'react';
import * as Styled from './ProfileName-Styles';

export function ProfileName({ name }) {
  return (
    <Styled.ProfileNameElement>
      <Styled.Name>
        {name}
      </Styled.Name>
    </Styled.ProfileNameElement>
  );
}

ProfileName.propTypes = {
  name: Prop.string.isRequired,
};
