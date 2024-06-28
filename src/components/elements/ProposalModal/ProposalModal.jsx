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
import { IconDiv } from '../IconDiv/IconDiv';
import { FavoriteIcon } from '../FavoriteIcon/FavoriteIcon';

export function ProposalModal({
  from, date, disponibility, opportunity, country, org, minage, maxage, minheight, category, description, requirements, minpayment, maxpayment, onclick,
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

        <IconDiv
          onclick={onclick}
          name="Fechar proposta"
        >
          <CloseIcon />
        </IconDiv>
      </Row>

      <Subtitle text="Detalhes" uppercase />

      <GridTwoColumn>

        {from && <InfoInRow infotitle="Proposta de" info={from} uppercase />}
        {date && <InfoInRow infotitle="Data" info={date} uppercase />}
        {disponibility && <InfoInRow infotitle="Disponibilidade" info={disponibility} uppercase />}
        {org && <InfoInRow infotitle="Liga" info={org} uppercase />}
        {country && <InfoInRow infotitle="País" info={country} uppercase />}
        {category && <InfoInRow infotitle="Categoria" info={category} uppercase />}
        {opportunity && <InfoInRow infotitle="Posição" info={opportunity} uppercase />}
        {minage && <InfoInRow infotitle="Idade mínima" info={minage} uppercase />}
        {maxage && <InfoInRow infotitle="Idade máxima" info={maxage} uppercase />}
        {minheight && <InfoInRow infotitle="Altura mínima" info={`${minheight} M`} uppercase />}
        {minpayment && <InfoInRow infotitle="Salário" info={`${minpayment} a ${maxpayment}`} uppercase />}

      </GridTwoColumn>

      {description && (
        <ColumnContainer>
          <Subtitle text="Descrição" uppercase />
          <Text text={description} />
        </ColumnContainer>
      )}

      {requirements && (
        <ColumnContainer>

          <Subtitle text="Requisitos" uppercase />
          <Text text={requirements} />
        </ColumnContainer>
      )}

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
  from: Prop.string,
  date: Prop.string,
  opportunity: Prop.string,
  country: Prop.string,
  org: Prop.string,
  category: Prop.string,
  description: Prop.string,
  requirements: Prop.string,
  minage: Prop.number,
  maxage: Prop.number,
  minheight: Prop.string,
  minpayment: Prop.number,
  maxpayment: Prop.number,
  onclick: Prop.func,
};
