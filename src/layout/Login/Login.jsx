import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './Login-Styles';

import { AuthForm } from '../../components/elements/AuthElements/AuthForm/AuthForm';
import { AuthButton } from '../../components/elements/AuthElements/AuthButton/AuthButton';
import { AuthInput } from '../../components/elements/AuthElements/AuthInput/AuthInput';
import { AuthRedirect } from '../../components/elements/AuthElements/AuthRedirect/Redirect';
import { AuthOptions } from '../../components/elements/AuthElements/AuthOptions/AuthOptions';
import { AuthWrapper } from '../../components/elements/AuthElements/AuthWrapper/AuthWrapper';

import { StyledLink } from '../../components/elements/StyledLink/StyledLink';
import { Title } from '../../components/elements/Title/Title';
import { theme } from '../../styles/theme';
import { AuthContainer } from '../../components/elements/AuthElements/AuthWrapper/AuthWrapper-Styles';

export function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // enviar os dados para o backend
    navigate('/player-dashboard'); // Direciona o usuário para alguma página quando ele clica no submit
  };

  return (
    <Styled.LoginPage>
      <AuthWrapper>

        <AuthContainer>

          <Title text="Login" size={theme.sizes.xxlarge} />

          <AuthForm>

            <AuthInput
              type="email"
              name="email_input"
              id="email_input"
              placeholder="Seu email"
              title="E-mail"
              required
            />

            <AuthInput
              type="password"
              name="password_input"
              id="password_input"
              placeholder="Insira sua senha"
              title="Senha"
              required
            />

            <AuthInput
              type="password"
              name="confirm_password_input"
              id="confirm_password_input"
              placeholder="Insira novamente sua senha"
              title="Confirme a senha"
              required
            />

            <AuthButton
              name="login_submit"
              id="login_submit"
              value="Login"
              onclick={handleSubmit}
            />

            <AuthOptions
              checkboxtext="Lembrar login"
              checkboxid="rememberMe"
              path="/forgot-password"
              pathtext="Esqueceu a senha?"
            />
            {/* no momento a checkbox do 'Lembrar login' é apenas estético */}

            <AuthRedirect
              text="Não possui uma conta?"
              path="/register"
              pathtext="Registre-se"
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

    </Styled.LoginPage>
  );
}
