import React, { useContext, useState } from 'react';
import * as Styled from './Opportunities-Styles';
import { GridProposals } from '../../../../components/elements/GridProposals/GridProposals';
import { S2tContext } from '../../../../contexts/s2tContext/S2tContext';
import { PlayerContext } from '../../../../contexts/userContext/PlayerProvider/PlayerContext';
import { Title } from '../../../../components/elements/Title/Title';
import { AuthDropdown } from '../../../../components/elements/AuthElements/AuthDropdown/AuthDropdown';

export function Opportunities() {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const playerContext = useContext(PlayerContext);
  const { playerState, playerDispatch } = playerContext;

  const opportunityTypeOptions = [
    { value: 'scouts', name: 'Scouts' },
    { value: 'agents', name: 'Agentes' },
    { value: 'clubs', name: 'Clubes' },
  ];

  const [selectedValue, setSelectedValue] = useState('scouts');

  const handleDropdownChange = (option) => {
    setSelectedValue(option.value);
  };

  return (
    <Styled.OpportunitiesContainer>

      <AuthDropdown
        id="opportunityType"
        options={opportunityTypeOptions}
        selectedvalue={selectedValue}
        onDropdownChange={handleDropdownChange} // Função de callback para atualizar o estado
      />

      {selectedValue === 'scouts' && (
      <GridProposals title="" items={s2tState.proposals[playerState.type.gender].agents[playerState.type.category]} />

      )}

      {selectedValue === 'clubs' && (
      <GridProposals title="" items={s2tState.proposals[playerState.type.gender].clubs[playerState.type.category]} />
      )}

    </Styled.OpportunitiesContainer>
  );
}
