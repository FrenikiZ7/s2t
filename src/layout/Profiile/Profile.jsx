// import Prop from 'prop-types';
import React from 'react';
import * as Styled from './Profile-Styles';
import data from '../../data/data';
import { ProfilePicture } from '../../components/elements/ProfilePicture/ProfilePicture';
import { ProfileInfo } from '../../components/elements/ProfileInfo/Container/ProfileInfo';
import { Info } from '../../components/elements/ProfileInfo/Info/Info';
import { ColumnContainer } from '../../components/ColumnContainer/Column-Styles';
import { Slide } from '../../components/elements/Slide/Slide';

export function Profile() {
  return (
    <Styled.ProfileContainer>
      <ProfilePicture imagesrc={data.profile[0].profileImageSrc} badge={data.profile[0].badge} />

      <ColumnContainer color="black">
        <ProfileInfo>
          <Info infotitle="nascimento" info={data.profile[0].birth} />
          <Info infotitle="idade" info={data.profile[0].age} />
          <Info infotitle="local de nascimento" info={data.profile[0].placeOfBirth} />
          <Info infotitle="nacionalidade" info={data.profile[0].nationality} />
          <Info infotitle="altura" info={data.profile[0].height} />
          <Info infotitle="perna boa" info={data.profile[0].goodLeg} />
        </ProfileInfo>

        <Slide items={data.profile[0].photos} />

      </ColumnContainer>
    </Styled.ProfileContainer>
  );
}

// Profile.propTypes = {
//   children: Prop.node.isRequired,
// };
