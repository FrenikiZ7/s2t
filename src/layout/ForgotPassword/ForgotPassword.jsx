import Prop from 'prop-types';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './ForgotPassword-Styles';
import { AuthWrapper } from '../../components/elements/AuthElements/AuthWrapper/AuthWrapper';
import { AuthContainer } from '../../components/elements/AuthElements/AuthWrapper/AuthWrapper-Styles';
import { Title } from '../../components/elements/Title/Title';
import { AuthForm } from '../../components/elements/AuthElements/AuthForm/AuthForm';
import { AuthButton } from '../../components/elements/AuthElements/AuthButton/AuthButton';
import { AuthInput } from '../../components/elements/AuthElements/AuthInput/AuthInput';
import { theme } from '../../styles/theme';
import { Popup } from '../../components/elements/Popup/Popup';

export function ForgotPassword() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  // enviar os dados para o backend
  };

  return (
    <Styled.ForgotPasswordPage>
      <AuthWrapper>

        <AuthContainer>

          <Title text="Alterar senha" size={theme.sizes.xxlarge} />

          <AuthForm>

            <AuthInput
              type="email"
              name="email_input"
              id="email_input"
              placeholder="Seu email"
              title="Insira o seu e-mail cadastrado"
              required
            />

            <AuthButton
              name="login_submit"
              id="login_submit"
              value="Próximo"
              onclick={handleSubmit}
            />

          </AuthForm>
        </AuthContainer>

        {isOpen && (
        <Popup
          title="Um email de verificação foi enviado para este endereço de email"
          firstoption="Fechar"
          firstpath="/"
          subtitle="Por favor, verifique!"
          isopen={isOpen}
          onclick={() => setIsOpen(!isOpen)}
        />
        )}

      </AuthWrapper>
    </Styled.ForgotPasswordPage>
  );
}

ForgotPassword.propTypes = {
};
