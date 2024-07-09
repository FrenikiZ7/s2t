import Prop from 'prop-types';
import React, { useContext, useState } from 'react';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { useNavigate } from 'react-router-dom';
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
import { AuthDropdown } from '../AuthElements/AuthDropdown/AuthDropdown';
import { S2tContext } from '../../../contexts/s2tContext/S2tContext';
import { addProposal } from '../../../contexts/s2tContext/s2tActions';

export function NewProposal({ onclick }) {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const [position, setPosition] = useState('');
  const [league, setLeague] = useState('');
  const [country, setCountry] = useState('');
  const [competitiveCategory, setCompetitiveCategory] = useState('');
  const [minHeight, setMinHeight] = useState();
  const [minAge, setMinAge] = useState();
  const [maxAge, setMaxAge] = useState();
  const [minPayment, setMinPayment] = useState();
  const [maxPayment, setMaxPayment] = useState();
  const [disponibilityDate, SetDisponibilityDate] = useState();
  const [description, setDescription] = useState('');
  const [requirements, setRequirements] = useState('');

  const proposal = {
    opportunityId: 12928,
    details: {
      from: 'Reducer',
      date: '01-06-2024',
      disponibility: '29/05/2024',
      category: 'Profissional',
      opportunity: 'Zagueiro',
      country: 'Alemanha',
      org: 'Bundesliga',
      age: {
        minAge: 18,
        maxAge: 28,
      },
      payment: {
        minPayment: 10000,
        maxPayment: 18000,
      },
      minHeight: '1,70',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel',
    requirements: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel',
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addProposal(s2tDispatch, proposalData);
    console.log(proposalData);
  };

  const competitiveCategoryOptions = [
    { value: 'pro', text: 'Profissional' },
    { value: 'semiPro', text: 'Semi-Profissional' },
    { value: 'academic', text: 'Universitário' },
    { value: 'amateur', text: 'Amador' },
    { value: 'recreational', text: 'Recreacional' },
  ];

  const positionsOptions = [
    { value: 'goleiro', text: 'Goleiro' },
    { value: 'lateral esquerdo', text: 'Lateral Esquerdo' },
    { value: 'lateral direito', text: 'Lateral Direito' },
    { value: 'zagueiro', text: 'Zagueiro' },
    { value: 'ala', text: 'Ala' },
    { value: 'primeiro volante', text: 'Primeiro Volante' },
    { value: 'segundo volante', text: 'Segundo Volante' },
    { value: 'meio-campista', text: 'Meio-Campista' },
    { value: 'meia-ofensivo', text: 'Meia Ofensivo' },
    { value: 'meia-lateral', text: 'Meia Lateral' },
    { value: 'segundo atacante', text: 'Segundo atacante' },
    { value: 'ponta esquerda', text: 'Ponta Esquerda' },
    { value: 'ponta direita', text: 'Ponta Direito' },
    { value: 'centroavante', text: 'Centroavante' },
  ];

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
          <AuthLayout isopen>
            <AuthInput
              type="text"
              name="league_input"
              id="league_input"
              placeholder="Para qual liga é a oportunidade?"
              title="Liga"
              value={league}
              onchange={(e) => setLeague(e.target.value)}
              required
            />

            <AuthInput
              type="text"
              name="country_input"
              id="country_input"
              placeholder="Para qual país é a oportunidade?"
              title="País"
              required
              value={league}
              onchange={(e) => setLeague(e.target.value)}
            />

            <AuthDropdown
              title="Para qual posição é a oportunidade"
              placeholder="Escolha a posição"
              id="position"
              options={positionsOptions}
              onDropdownChange={(option) => setProposalData((prevData) => ({ ...prevData, position: option }))}
            />

            <AuthDropdown
              title="Para qual categoria é a oportunidade?"
              id="competitiveCategory"
              placeholder="Escolha a categoria"
              options={competitiveCategoryOptions}
              onDropdownChange={(option) => setProposalData((prevData) => ({ ...prevData, competitiveCategory: option }))}
              required
            />

            <AuthInput
              type="date"
              name="disponibility_input"
              id="disponibility_input"
              title="Qual a data de disponibilidade da oportunidade?"
              value={league}
              onchange={(e) => setLeague(e.target.value)}
            />

            <AuthInput
              type="number"
              name="minimumHeight_input"
              id="minimumHeight_input"
              placeholder="Qual altura mínima para se candidatar?"
              title="Altura mínima"
              value={league}
              onchange={(e) => setLeague(e.target.value)}
            />

            <AuthInput
              type="number"
              name="minimumAge_input"
              id="minimumAge_input"
              placeholder="Qual a idade mínima para se candidatar? (Em anos)"
              title="Idade Mínima"
              value={league}
              onchange={(e) => setLeague(e.target.value)}
            />

            <AuthInput
              type="number"
              name="maximumAge_input"
              id="maximumAge_input"
              placeholder="Qual a idade máxima para se candidatar? (Em anos)"
              title="Idade Máxima"
              value={league}
              onchange={(e) => setLeague(e.target.value)}
            />

            <AuthInput
              type="number"
              name="mininumPayment_input"
              id="mininumPayment_input"
              placeholder="Qual o menor valor que o jogador pode receber mensalmente?"
              title="Valor mínimo"
              value={league}
              onchange={(e) => setLeague(e.target.value)}
              required
            />

            <AuthInput
              type="number"
              name="maximumPayment_input"
              id="maximumPayment_input"
              placeholder="Qual o maior valor que o jogador pode receber mensalmente?"
              title="Valor máximo"
              value={league}
              onchange={(e) => setLeague(e.target.value)}
              required
            />
          </AuthLayout>

          <ColumnContainer>
            <Subtitle text="Descrição" uppercase />
            <TextArea
              placeholder="Insira a descrição da sua proposta"
              name="description"
              value={league}
              onchange={(e) => setLeague(e.target.value)}
            />
          </ColumnContainer>

          <ColumnContainer>
            <Subtitle text="Requisitos" uppercase />
            <TextArea
              placeholder="Insira outros requisitos para sua proposta"
              name="requirements"
              value={league}
              onchange={(e) => setLeague(e.target.value)}
            />

          </ColumnContainer>

          <AuthButton
            name="createProposal_submit"
            id="createProposal_submit"
            value="Publicar Proposta"
            onclick={(e) => handleSubmit(e)}
          />
        </AuthForm>
      </AuthWrapper>

    </Styled.NewProposalContainer>
  );
}

NewProposal.propTypes = {
  onclick: Prop.func,
};
