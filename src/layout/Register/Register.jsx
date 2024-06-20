import React, { useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import * as Styled from './Register-Styles';

import { Title } from '../../components/elements/Title/Title';

import { theme } from '../../styles/theme';
import { Button } from '../../components/elements/Button/Button';
import { Row } from '../../components/RowContainer/Row';
import { AuthWrapper } from '../../components/elements/AuthElements/AuthWrapper/AuthWrapper';
import { AuthContainer } from '../../components/elements/AuthElements/AuthWrapper/AuthWrapper-Styles';
import { AuthForm } from '../../components/elements/AuthElements/AuthForm/AuthForm';
import { AuthInput } from '../../components/elements/AuthElements/AuthInput/AuthInput';
import { StyledLink } from '../../components/elements/StyledLink/StyledLink';
import { AuthRedirect } from '../../components/elements/AuthElements/AuthRedirect/Redirect';
import { AuthButton } from '../../components/elements/AuthElements/AuthButton/AuthButton';
import { AuthRadio } from '../../components/elements/AuthElements/AuthRadio/AuthRadio';
import { Popup } from '../../components/elements/Popup/Popup';
import { AuthDropdown } from '../../components/elements/AuthElements/AuthDropdown/AuthDropdown';
import { PricingCard } from '../../components/elements/PricingCard/PricingCard';

export function Register() {
  const [profileType, setProfileType] = useState('');
  // const [isOpen, setIsOpen] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // enviar os dados para o backend
    // setIsOpen(!isOpen);
    navigate('/player-dashboard');
  };

  const typeOptions = [
    { value: 'player', label: 'Atleta' },
    { value: 'scout', label: 'Scout' },
    { value: 'club', label: 'Clube' },
    { value: 'agent', label: 'Agente' },
    { value: 'league', label: 'Liga' },
    { value: 'university', label: 'Universidade' },
  ];

  const competitiveCategoryOptions = [
    { value: 'pro', label: 'Profissional' },
    { value: 'semiPro', label: 'Semi-Profissional' },
    { value: 'academic', label: 'Universitário' },
    { value: 'amateur', label: 'Amador' },
    { value: 'recreational', label: 'Recreacional' },
  ];

  const levelsOptions = [
    { value: 'serieA', text: 'Serie A' },
    { value: 'serieB', text: 'Serie B' },
    { value: 'serieC', text: 'Serie C' },
    { value: 'serieD', text: 'Serie D' },
  ];

  const universityLevelsOptions = [
    { value: 'ncaa1', text: 'NCAA 1 (EUA)' },
    { value: 'ncaa2', text: 'NCAA 2 (EUA)' },
    { value: 'ncaa3', text: 'NCAA 3 (EUA)' },
    { value: 'naia1', text: 'NAIA 1 (EUA)' },
    { value: 'naia2', text: 'NAIA 2 (EUA)' },
    { value: 'nccaa1', text: 'NCCAA 1 (EUA)' },
    { value: 'nccaa2', text: 'NCCAA 2 (EUA)' },
    { value: 'njcaa1', text: 'NJCAA 1 (EUA)' },
    { value: 'njcaa2', text: 'NJCAA 2 (EUA)' },
    { value: 'njcaa3', text: 'NJCAA 3 (EUA)' },
  ];

  const genreOptions = [
    { value: 'male', label: 'Masculino' },
    { value: 'female', label: 'Feminino' },
  ];

  return (
    <Styled.RegisterPage>

      <AuthWrapper>
        <AuthContainer>
          <AuthForm>
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

            <AuthRadio title="Qual o seu tipo de perfil?" options={typeOptions} groupname="genreOptions" />

            <AuthRadio title="Qual categoria você se enquadra?" options={competitiveCategoryOptions} groupname="teamGenreOptions" />

            <AuthDropdown
              title="Qual o nível competitivo"
              id="competitiveLevel"
              placeholder="Escolha seu nível"
              options={levelsOptions}
              otheroption
            />

            <AuthDropdown
              title="Qual o nível competitivo"
              id="universityCompetitiveLevel"
              placeholder="Escolha seu nível"
              options={universityLevelsOptions}
              otheroption
            />

            <AuthRadio title="Qual o seu gênero?" options={genreOptions} groupname="typeOptions" />

            <AuthButton
              name="register_submit"
              id="register_submit"
              value="Registrar"
              onclick={handleSubmit}
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

      {/* {isOpen && (
      <Popup
        title="Deseja preencher agora as informações do seu perfil?"
        firstoption="Sim"
        firstpath="/user-info"
        secondoption="Deixar para depois"
        secondpath="/player-dashboard"
        isopen={isOpen}
        onclick={() => setIsOpen(!isOpen)}
      />
      )} */}

      {/* <PricingCard /> */}

    </Styled.RegisterPage>

  );
}
