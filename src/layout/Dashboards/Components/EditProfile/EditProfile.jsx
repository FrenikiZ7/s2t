import Prop from 'prop-types';
import React from 'react';
import * as Styled from './EditProfile-Styles';
import { Player } from '../../../Register/Forms/Player/Player';
import { Club } from '../../../Register/Forms/Club/Club';
import { University } from '../../../Register/Forms/University/University';

export function EditProfile({ type }) {
  return (
    <Styled.EditProfileContainer>

      {type === 'club' && <Club />}
      {type === 'player' && <Player />}
      {type === 'university' && <University />}

    </Styled.EditProfileContainer>
  );
}

EditProfile.propTypes = {
  type: Prop.string.isRequired,
};
