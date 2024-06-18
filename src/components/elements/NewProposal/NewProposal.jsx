import Prop from 'prop-types';
import React from 'react';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import * as Styled from './NewProposal-Styles';
import { Subtitle } from '../Subtitle/Subtitle';
import { ColumnContainer } from '../../ColumnContainer/Column-Styles';
import { AuthWrapper } from '../AuthElements/AuthWrapper/AuthWrapper';
import { AuthContainer } from '../AuthElements/AuthWrapper/AuthWrapper-Styles';
import { AuthForm } from '../AuthElements/AuthForm/AuthForm';
import { TextArea } from '../TextArea/TextArea';
import { AuthInput } from '../AuthElements/AuthInput/AuthInput';
import { AuthButton } from '../AuthElements/AuthButton/AuthButton';
import { IconDiv } from '../IconDiv/IconDiv';
import { Title } from '../Title/Title';
import { Row } from '../../RowContainer/Row';
import { AuthLayout } from '../AuthElements/AuthLayout/AuthLayout';

export function NewProposal({ onclick }) {
  return (
    <Styled.NewProposalContainer>
      <Row>

        <Title text="Criar oportunidade" uppercase />

        <IconDiv name="Voltar" onclick={onclick}>
          <CloseIcon />
        </IconDiv>
      </Row>

      <AuthWrapper>
        <AuthForm>
          <Subtitle text="Detalhes" uppercase />
          <AuthLayout>
            <AuthInput
              type="text"
              name="league_input"
              id="league_input"
              placeholder="Para qual liga é a oportunidade?"
              title="Liga"
              required
            />

            <AuthInput
              type="text"
              name="country_input"
              id="country_input"
              placeholder="Para qual país é a oportunidade?"
              title="País"
              required
            />

            <AuthInput
              type="text"
              name="category_input"
              id="category_input"
              placeholder="Para qual categoria é a oportunidade?"
              title="Categoria"
              required
            />

            <AuthInput
              type="number"
              name="minimumHeight_input"
              id="minimumHeight_input"
              placeholder="Qual altura mínima para se candidatar?"
              title="Altura mínima"
            />

            <AuthInput
              type="number"
              name="minimumAge_input"
              id="minimumAge_input"
              placeholder="Qual a idade mínima para se candidatar? (Em anos)"
              title="Idade Mínima"
            />

            <AuthInput
              type="number"
              name="maximumAge_input"
              id="maximumAge_input"
              placeholder="Qual a idade máxima para se candidatar? (Em anos)"
              title="Idade Máxima"
            />

            <AuthInput
              type="number"
              name="mininumPayment_input"
              id="mininumPayment_input"
              placeholder="Qual o menor valor que o jogador pode receber mensalmente?"
              title="Valor mínimo"
              required
            />

            <AuthInput
              type="number"
              name="maximumPayment_input"
              id="maximumPayment_input"
              placeholder="Qual o maior valor que o jogador pode receber mensalmente?"
              title="Valor máximo"
              required
            />
          </AuthLayout>

          <ColumnContainer>
            <Subtitle text="Descrição" uppercase />
            <TextArea placeholder="Insira a descrição da sua proposta" info="description" />
          </ColumnContainer>

          <ColumnContainer>
            <Subtitle text="Requisitos" uppercase />
            <TextArea placeholder="Insira outros requisitos para sua proposta" info="requirments" />

          </ColumnContainer>

          <AuthButton
            name="createProposal_submit"
            id="createProposal_submit"
            value="Publicar Proposta"
            // onClick={handleSubmit}
          />
        </AuthForm>
      </AuthWrapper>

    </Styled.NewProposalContainer>
  );
}

NewProposal.propTypes = {
  onclick: Prop.func,
};
