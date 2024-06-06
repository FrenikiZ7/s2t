import Prop from 'prop-types';
import React from 'react';
import * as Styled from './AuthHistoric-Styles';
import { AuthInput } from '../AuthInput/AuthInput';
import { theme } from '../../../../styles/theme';
import { Button } from '../../Button/Button';

export function AuthHistoric({ children }) {
  return (
    <Styled.AuthHistoricContainer>

      <h4>Histórico de clubes</h4>
      <AuthInput
        type="text"
        name="club_input"
        id="club_input"
        placeholder="Nome do clube"
        title="Clube"
      />

      <AuthInput
        type="number"
        name="earliestYear_input"
        id="earliestYear_input"
        placeholder="Ano de entrada"
        title="Entrada"
      />

      <AuthInput
        type="number"
        name="latestYear_input"
        id="latestYear_input"
        placeholder="Ano de saída"
        title="Saída"
      />

      <label>
        <input type="checkbox" name="club" value="atual" />
        Atual Clube
      </label>

      <Button
        text="Adicionar"
        bgcolor={theme.colors.quaternary}
        bghover={theme.colors.secondary}
        textcolor={theme.colors.white}
        texthover={theme.colors.white}
        border={theme.colors.tertiary}
        borderhover={theme.colors.white}
      />

    </Styled.AuthHistoricContainer>
  );
}

AuthHistoric.propTypes = {
  children: Prop.node.isRequired,
};
