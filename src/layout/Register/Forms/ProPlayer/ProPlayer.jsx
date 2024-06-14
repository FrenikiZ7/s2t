import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './ProPlayer-Styles';

import { AuthForm } from '../../../../components/elements/AuthElements/AuthForm/AuthForm';
import { AuthButton } from '../../../../components/elements/AuthElements/AuthButton/AuthButton';
import { AuthInput } from '../../../../components/elements/AuthElements/AuthInput/AuthInput';
import { AuthRedirect } from '../../../../components/elements/AuthElements/AuthRedirect/Redirect';
import { AuthWrapper } from '../../../../components/elements/AuthElements/AuthWrapper/AuthWrapper';

import { StyledLink } from '../../../../components/elements/StyledLink/StyledLink';
import { Subtitle } from '../../../../components/elements/Subtitle/Subtitle';

import { theme } from '../../../../styles/theme';
import { AuthContainer } from '../../../../components/elements/AuthElements/AuthWrapper/AuthWrapper-Styles';

import { AuthRadio } from '../../../../components/elements/AuthElements/AuthRadio/AuthRadio';
import { AuthHistoric } from '../../../../components/elements/AuthElements/AuthHistoric/AuthHistoric';
import { Row } from '../../../../components/RowContainer/Row';
import { AuthFile } from '../../../../components/elements/AuthElements/AuthFile/AuthFile';
import { AuthAchievement } from '../../../../components/elements/AuthElements/AuthAchievement/AuthAchievement';
import { AuthQualCheck } from '../../../../components/elements/AuthElements/AuthQualificationCheck/AuthQualCheck';
import { AuthDropdown } from '../../../../components/elements/AuthElements/AuthDropdown/AuthDropdown';

export function ProPlayer() {
  const [name, setName] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // enviar os dados para o backend
    navigate('/'); // Direciona o usuário para alguma página quando ele clica no submit
  };

  const legOptions = [
    { value: 'right', label: 'Direita' },
    { value: 'left', label: 'Esquerda' },
  ];

  const genreOptions = [
    { value: 'male', label: 'Masculino' },
    { value: 'female', label: 'Feminino' },
  ];

  const categoryOptions = [
    { value: 'sub7', name: 'Sub-7 (6 e 7 anos)' },
    { value: 'sub8', name: 'Sub-8 (8 anos)' },
    { value: 'sub9', name: 'Sub-9 (8 e 9 anos)' },
    { value: 'sub11', name: 'Sub-11 (10 e 11 anos)' },
    { value: 'sub13', name: 'Sub-13 (12 e 13 anos)' },
    { value: 'sub15', name: 'Sub-15 (14 e 15 anos)' },
    { value: 'sub17', name: 'Sub-17 (16 e 17 anos)' },
    { value: 'sub20', name: 'Sub-20 (18, 19 e 20 anos)' },
    { value: 'adult', name: 'Adulto (Já atua no time principal)' },
  ];

  const [category, setCategory] = useState(null);

  const positionsOptions = [
    { value: 'goleiro', name: 'Goleiro' },
    { value: 'lateral esquerdo', name: 'Lateral Esquerdo' },
    { value: 'lateral direito', name: 'Lateral Direito' },
    { value: 'zagueiro', name: 'Zagueiro' },
    { value: 'ala', name: 'Ala' },
    { value: 'primeiro volante', name: 'Primeiro Volante' },
    { value: 'segundo volante', name: 'Segundo Volante' },
    { value: 'meio-campista', name: 'Meio-Campista' },
    { value: 'meia-ofensivo', name: 'Meia Ofensivo' },
    { value: 'meia-lateral', name: 'Meia Lateral' },
    { value: 'segundo atacante', name: 'Segundo atacante' },
    { value: 'ponta esquerda', name: 'Ponta Esquerda' },
    { value: 'ponta direita', name: 'Ponta Direito' },
    { value: 'centroavante', name: 'Centroavante' },
  ];

  const leagueOptions = [
    { value: 'lifa', name: 'LIFA' },
  ];

  const [league, setLeague] = useState(null);

  return (
    <Styled.ProPlayerContainer>

      <AuthWrapper>

        <AuthContainer>
          <Subtitle text="Profissional" size={theme.sizes.xxlarge} />

          <AuthForm>

            <Subtitle text="Dados" size={theme.sizes.xlarge} />

            <AuthInput
              type="name"
              name="name_input"
              id="name_input"
              placeholder="Seu nome completo"
              title="Nome"
              required
            />

            <AuthInput
              type="email"
              name="email_input"
              id="email_input"
              placeholder="Seu e-mail"
              title="E-mail"
              required
            />

            <AuthInput
              type="password"
              name="password_input"
              id="password_input"
              placeholder="Sua senha"
              title="Senha"
              required
            />

            <AuthInput
              type="password"
              name="confirm_password_input"
              id="confirm_password_input"
              placeholder="Confirme sua senha"
              title="Confirmação de senha"
              required
            />

            <Subtitle text="Seu perfil" size={theme.sizes.xlarge} />

            <AuthRadio title="Qual o seu gênero?" options={genreOptions} groupname="genreOptions" />

            <AuthRadio title="Qual a sua melhor perna?" options={legOptions} groupname="legOptions" />

            <AuthDropdown
              title="Você atua em qual categoria?"
              id="category"
              placeholder="Escolha sua categoria"
              options={categoryOptions}
              onDropdownChange={(option) => setCategory(option.value)}
              otheroption
            />

            {category === 'other' && (
              <AuthInput
                type="name"
                name="other_input"
                id="other_input"
                placeholder="insira aqui a categoria"
                title="Qual categoria?"
                required
              />
            )}

            <AuthInput
              type="date"
              name="date_input"
              id="date_input"
              title="Data de nascimento"
              required
            />

            <AuthInput
              type="text"
              name="weigth_input"
              id="weigth_input"
              title="Peso"
              placeholder="Seu peso atual"
              required
            />

            <AuthInput
              type="text"
              name="primaryBirthCountry_input"
              id="primaryBirthCountry_input"
              title="Nacionalide primária"
              placeholder="Seu nacionalide primária"
              required
            />

            <AuthInput
              type="text"
              name="secondaryBirthCountry_input"
              id="secondaryBirthCountry_input"
              title="Nacionalide secundária"
              placeholder="Seu nacionalide secundária"
            />

            <AuthInput
              type="text"
              name="birthCity_input"
              id="birthCity_input"
              title="Cidade"
              placeholder="Sua cidade de nascimento"
              required
            />

            <AuthInput
              type="text"
              name="payment_input"
              id="payment_input"
              title="Salário"
              placeholder="Seu salário base"
            />

            <AuthInput
              type="text"
              name="transferValue_input"
              id="transferValue_input"
              title="Valor de transferência"
              placeholder="Seu valor de transferência"
            />

            <AuthDropdown
              title="Posição Principal"
              placeholder="Sua posição principal"
              id="mainPosition"
              options={positionsOptions}
              required
            />

            <AuthDropdown
              title="Posição Secundária"
              placeholder="Sua posição secundária"
              id="secondaryPosition"
              options={positionsOptions}
            />

            <AuthDropdown
              title="Posição terciária"
              placeholder="Sua posição terciária"
              id="tertiaryPosition"
              options={positionsOptions}
            />

            <AuthDropdown
              title="Você atua em alguma liga?"
              id="league"
              placeholder="Escolha sua Liga"
              options={leagueOptions}
              onDropdownChange={(option) => setLeague(option.value)}
              otheroption
              required
            />

            {league === 'other' && (
              <AuthInput
                type="name"
                name="other_input"
                id="other_input"
                placeholder="insira aqui a liga"
                title="Qual liga?"
                required
              />
            )}

            <AuthFile text="Escolha sua foto de perfil (Recomendado: Imagens 1:1)" id="profileImage" />

            <AuthFile text="Escolha seu banner (Recomendado: Imagens 16:9)" id="bannerImage" />

            <Subtitle text="Sua história esportiva" size={theme.sizes.xlarge} />

            <Row>
              <AuthHistoric title="Histórico de clubes" id="Club" inputtitle="Clube" placeholder="Nome do Clube" />
              <AuthAchievement title="Histórico de títulos" id="titles" inputtitle="Competição" placeholder="Nome da competição" />
            </Row>

            <Subtitle text="Sua história acadêmica" size={theme.sizes.xlarge} />

            {/* <Column> */}
            <AuthQualCheck title="Realizou a prova TOEFL?" groupname="toefl" required />
            <AuthQualCheck title="Realizou a prova ACT?" groupname="act" required />
            <AuthQualCheck title="Realizou a prova SAT?" groupname="sat" required />

            <AuthInput
              type="date"
              name="secondGrade_input"
              id="secondGrade_input"
              title="Ano de formatura do segundo grau"
              placeholder="Ano"
              required
            />

            <AuthInput
              type="number"
              name="secondGradeGpa_input"
              id="secondGradeGpa_input"
              title="GPA (Grade Point Average)"
              placeholder="Nota média final"
              required
            />
            {/* </Column> */}

            <AuthHistoric title="Conhecimentos" id="Academic" inputtitle="Formação" placeholder="Nome da formação" />

            <AuthButton
              name="register_submit"
              id="register_submit"
              value="Registrar"
              onClick={handleSubmit}
            />

            <AuthRedirect
              text="Já possui uma conta?"
              path="/login"
              pathtext="Login"
            />

            <StyledLink
              text="Voltar ao menu"
              path="/"
              color={theme.colors.secondary}
              hovercolor={theme.colors.tertiary}
            />

          </AuthForm>
        </AuthContainer>

      </AuthWrapper>
    </Styled.ProPlayerContainer>

  );
}
