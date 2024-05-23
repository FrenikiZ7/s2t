import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './Register-Styles';

import { AuthForm } from '../../components/elements/AuthElements/AuthForm/AuthForm';
import { AuthButton } from '../../components/elements/AuthElements/AuthButton/AuthButton';
import { AuthInput } from '../../components/elements/AuthElements/AuthInput/AuthInput';
import { AuthRedirect } from '../../components/elements/AuthElements/AuthRedirect/Redirect';
import { AuthWrapper } from '../../components/elements/AuthElements/AuthContainer/AuthWrapper';

import { StyledLink } from '../../components/elements/StyledLink/StyledLink';
import { Title } from '../../components/elements/Title/Title';
import { theme } from '../../styles/theme';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // enviar os dados para o backend
    navigate('/'); // Direciona o usuário para alguma página quando ele clica no submit
  };

  return (
    <Styled.RegisterPage>

      <AuthWrapper>

        <Title text="Registre-se" size={theme.sizes.xxlarge} />

        <AuthForm>

          <AuthInput
            type="name"
            name="name_input"
            id="name_input"
            placeholder="Seu nome completo"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <AuthInput
            type="email"
            name="email_input"
            id="email_input"
            placeholder="Seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <AuthInput
            type="password"
            name="password_input"
            id="password_input"
            placeholder="Sua senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <AuthInput
            type="password"
            name="confirm_password_input"
            id="confirm_password_input"
            placeholder="Confirme sua senha"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />

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
      </AuthWrapper>
    </Styled.RegisterPage>

  );
}
