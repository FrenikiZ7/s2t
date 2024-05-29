import Prop from 'prop-types';
import React from 'react';
import { useOutletContext } from 'react-router-dom';
import * as Styled from './Profile-Styles';
import { ProfileInfo } from '../../../../components/elements/ProfileInfo/ProfileInfo';
import { ProfileSlide } from '../../../../components/elements/ProfileSlide/ProfileSlide';
import { RowContainer } from '../../../../components/RowContainer/Row-Styles.js';
import { Historic } from '../../../../components/elements/Historic/Historic';
import { TextSlide } from '../../../../components/elements/TextSlide/TextSlide';

export function Profile() {
  const userProfile = useOutletContext();

  return (
    <Styled.ProfileContainer>

      <ProfileInfo items={userProfile.info} />

      <ProfileSlide items={userProfile.photos} title="Fotos / Videos" />

      <RowContainer>
        <Historic items={userProfile.clubs} title="Histórico de clubes" />
        <Historic items={userProfile.studies} title="Histórico acadêmico" />
      </RowContainer>

      <TextSlide items={userProfile.championships} title="Títulos:" />
    </Styled.ProfileContainer>
  );
}
