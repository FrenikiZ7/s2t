import Prop from 'prop-types';
import React, { useState } from 'react';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import * as Styled from './ProposalModal-Styles';
import { Title } from '../Title/Title';
import { GridTwoColumn } from '../../GridTwoColumn/GridTwoColumn';
import { Button } from '../Button/Button';
import { theme } from '../../../styles/theme';
import { Subtitle } from '../Subtitle/Subtitle';
import { InfoInRow } from '../InfoInRow/InfoInRow';
import { Text } from '../Text/Text';
import { ColumnContainer } from '../../ColumnContainer/Column-Styles';
import { TextArea } from '../TextArea/TextArea';
import { Row } from '../../RowContainer/Row';

export function ProposalModal({
  from, date, opportunity, country, org, category, description, requirements, minpayment, maxpayment, onclick,
}) {
  const [message, setMessage] = useState('');

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    // enviar os dados para o backend
  };

  return (

    <Styled.ProposalModalElement>

      <Row>
        <Title text="Oportunidade" uppercase />

        <Styled.CloseDiv>
          <CloseIcon
            onClick={onclick}
            aria-label="Fechar proposta"
            title="Fechar proposta"
          />
        </Styled.CloseDiv>
      </Row>

      <Subtitle text="Detalhes" uppercase />

      <GridTwoColumn>

        <InfoInRow infotitle="Proposta de" info={from} uppercase />
        <InfoInRow infotitle="Data" info={date} uppercase />
        <InfoInRow infotitle="Liga" info={org} uppercase />
        <InfoInRow infotitle="País" info={country} uppercase />
        <InfoInRow infotitle="Categoria" info={category} uppercase />
        <InfoInRow infotitle="Posição" info={opportunity} uppercase />
        <InfoInRow infotitle="Idade mínima" info="18" uppercase />
        <InfoInRow infotitle="Idade máxima" info="30" uppercase />
        <InfoInRow infotitle="Altura mínima" info="1,75 M" uppercase />
        <InfoInRow infotitle="Salário" info={`${minpayment} a ${maxpayment}`} uppercase />

      </GridTwoColumn>

      <ColumnContainer>
        <Subtitle text="Descrição" uppercase />
        <Text text={description} />
      </ColumnContainer>

      <ColumnContainer>
        <Subtitle text="Requisitos" uppercase />
        <Text text={requirements} />
      </ColumnContainer>

      <ColumnContainer>
        <Subtitle text="Mensagem" uppercase />
        <TextArea placeholder="Opcional" info="message" onChange={(e) => setMessage(e.target.value)} value={message} />
        <Button
          text="Enviar proposta"
          bgcolor={theme.colors.quaternary}
          bghover={theme.colors.secondary}
          textcolor={theme.colors.white}
          texthover={theme.colors.white}
          border={theme.colors.tertiary}
          borderhover={theme.colors.white}
          onclick={handleSubmitMessage}
        />

      </ColumnContainer>

    </Styled.ProposalModalElement>

  );
}

ProposalModal.propTypes = {
  from: Prop.string.isRequired,
  date: Prop.string.isRequired,
  opportunity: Prop.string.isRequired,
  country: Prop.string.isRequired,
  org: Prop.string.isRequired,
  category: Prop.string.isRequired,
  description: Prop.string.isRequired,
  requirements: Prop.string.isRequired,
  minpayment: Prop.number.isRequired,
  maxpayment: Prop.number.isRequired,
  onclick: Prop.func,
};
