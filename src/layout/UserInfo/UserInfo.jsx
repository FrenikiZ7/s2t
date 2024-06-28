import Prop from 'prop-types';
import React from 'react';
import * as Styled from './UserInfo-Styles';
import { ProPlayer } from '../Register/Forms/ProPlayer (No used)/ProPlayer';
import { Subtitle } from '../../components/elements/Subtitle/Subtitle';
import { Button } from '../../components/elements/Button/Button';
import { theme } from '../../styles/theme';
import { Row } from '../../components/RowContainer/Row';

export function UserInfo() {
  return (
    <Styled.UserInfoContainer>

      <ProPlayer />
    </Styled.UserInfoContainer>
  );
}

UserInfo.propTypes = {

};
