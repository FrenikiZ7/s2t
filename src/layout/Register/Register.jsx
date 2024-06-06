import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './Register-Styles';

import { AuthForm } from '../../components/elements/AuthElements/AuthForm/AuthForm';
import { AuthButton } from '../../components/elements/AuthElements/AuthButton/AuthButton';
import { AuthInput } from '../../components/elements/AuthElements/AuthInput/AuthInput';
import { AuthRedirect } from '../../components/elements/AuthElements/AuthRedirect/Redirect';
import { AuthWrapper } from '../../components/elements/AuthElements/AuthWrapper/AuthWrapper';

import { StyledLink } from '../../components/elements/StyledLink/StyledLink';
import { Title } from '../../components/elements/Title/Title';
import { Subtitle } from '../../components/elements/Subtitle/Subtitle';

import { theme } from '../../styles/theme';
import { AuthContainer } from '../../components/elements/AuthElements/AuthWrapper/AuthWrapper-Styles';
import { Button } from '../../components/elements/Button/Button';
import {
  AuthRadioContainer, AuthRadioElement, AuthRadioInput, AuthRadioLabel,
} from '../../components/elements/AuthElements/AuthRadio/AuthRadio-Styles';
import { AuthRadio } from '../../components/elements/AuthElements/AuthRadio/AuthRadio';
import { AuthHistoric } from '../../components/elements/AuthElements/AuthHistoric/AuthHistoric';
import { Row } from '../../components/RowContainer/Row';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profileType, setProfileType] = useState('');

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

  return (
    <Styled.RegisterPage>

      <AuthWrapper>

        <Title text="Você é:" size={theme.sizes.xxlarge} uppercase />

        <Button
          text="Jogador"
          bgcolor={theme.colors.primary}
          bghover={theme.colors.black}
          textcolor={theme.colors.black}
          texthover={theme.colors.primary}
          border={theme.colors.black}
          borderhover={theme.colors.primary}
          onclick={() => setProfileType('player')}
        />

        <Button
          text="Scout"
          bgcolor={theme.colors.primary}
          bghover={theme.colors.black}
          textcolor={theme.colors.black}
          texthover={theme.colors.primary}
          border={theme.colors.black}
          borderhover={theme.colors.primary}
          onclick={() => setProfileType('scout')}
        />

        <AuthContainer>
          <Subtitle text="Registre-se" size={theme.sizes.xxlarge} />

          <AuthForm>

            <Subtitle text="Dados" size={theme.sizes.large} />

            <AuthInput
              type="name"
              name="name_input"
              id="name_input"
              placeholder="Seu nome completo"
              title="Nome"
              onchange={(e) => setName(e.target.value)}
              value={name}
            />

            <AuthInput
              type="email"
              name="email_input"
              id="email_input"
              placeholder="Seu e-mail"
              title="E-mail"
              onchange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <AuthInput
              type="password"
              name="password_input"
              id="password_input"
              placeholder="Sua senha"
              title="Senha"
              onchange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <AuthInput
              type="password"
              name="confirm_password_input"
              id="confirm_password_input"
              placeholder="Confirme sua senha"
              title="Confirmação de senha"
              onchange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />

            <Subtitle text="Seu perfil" size={theme.sizes.large} />

            <AuthRadio title="Qual a sua melhor perna?" options={legOptions} groupname="legOptions" />

            <AuthRadio title="Qual o seu gênero?" options={genreOptions} groupname="genreOptions" />

            <AuthInput
              type="date"
              name="date_input"
              id="date_input"
              title="Data de nascimento"
            />

            <AuthInput
              type="text"
              name="weigth_input"
              id="weigth_input"
              title="Peso"
              placeholder="Seu peso atual"
            />

            <AuthInput
              type="text"
              name="birthCountry_input"
              id="birthCountry_input"
              title="País"
              placeholder="Seu país de nascimento"
            />

            <AuthInput
              type="text"
              name="birthCity_input"
              id="birthCity_input"
              title="Cidade"
              placeholder="Sua cidade de nascimento"
            />

            <Subtitle text="Sua história" size={theme.sizes.large} />

            <Row>
              <AuthHistoric />
              <AuthHistoric />
            </Row>

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
    </Styled.RegisterPage>

  );
}
