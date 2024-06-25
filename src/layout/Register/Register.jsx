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
import { Text } from '../../components/elements/Text/Text';
import { Subtitle } from '../../components/elements/Subtitle/Subtitle';
import { Column } from '../../components/ColumnContainer/Column';
import { Bubble } from '../../components/bubble/Bubble';

export function Register() {
  const [profileType, setProfileType] = useState('');
  // const [isOpen, setIsOpen] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // enviar os dados para o backend
    // setIsOpen(!isOpen);
    navigate('/login');
  };

  const profileTypeOptions = [
    { value: 'player', text: 'Atleta' },
    { value: 'scout', text: 'Scout' },
    { value: 'club', text: 'Clube' },
    { value: 'agent', text: 'Agente' },
    { value: 'league', text: 'Liga' },
    { value: 'university', text: 'Universidade' },
    { value: 'staff', text: 'Staff' },
    { value: 'exchangeAgencie', text: 'Agência de intercâmbio' },
    { value: 'fan', text: 'Fã' },
  ];

  const competitiveCategoryOptions = [
    { value: 'pro', text: 'Profissional' },
    { value: 'semiPro', text: 'Semi-Profissional' },
    { value: 'academic', text: 'Universitário' },
    { value: 'amateur', text: 'Amador' },
    { value: 'recreational', text: 'Recreacional' },
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

  const teamCategoryOptions = [
    { value: 'male', label: 'Masculino' },
    { value: 'female', label: 'Feminino' },
  ];

  const plansOptions = [
    { value: 'free', label: 'Plano grátis ( jogador )' },
    { value: 'plan1', label: 'Plano 1 ( jogador ) - R$ 7,00/mês' },
    { value: 'plan2', label: 'Plano 2 ( jogador ) - R$ 15,00/mês' },
    { value: 'plan3', label: 'Plano 3 ( jogador ) - R$ 50,00/mês' },
  ];

  return (
    <Styled.RegisterPage>

      <Bubble>
        <Subtitle text="Passo a passo" uppercase as="h4" size={theme.sizes.xlarge} />
        <Text text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur" />
      </Bubble>

      <AuthContainer>
        <Subtitle text="Registre-se" uppercase as="h4" size={theme.sizes.xlarge} />

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

          <AuthDropdown
            title="Qual o seu tipo de perfil?"
            id="userTypeOptions"
            placeholder="Escolha seu tipo de perfil"
            options={profileTypeOptions}
            required
          />

          <AuthDropdown
            title="Qual categoria você se enquadra?"
            id="competitiveCategory"
            placeholder="Escolha sua categoria"
            options={competitiveCategoryOptions}
            required
          />

          {/* Para universidades são outras opções. Exemplo no código comentado abaixo */}
          <AuthDropdown
            title="Qual o seu nível competitivo"
            id="competitiveLevel"
            placeholder="Escolha seu nível"
            options={levelsOptions}
            otheroption
          />

          {/* <AuthDropdown
              title="Qual o nível competitivo"
              id="universityCompetitiveLevel"
              placeholder="Escolha seu nível"
              options={universityLevelsOptions}
              otheroption
            /> */}

          <AuthRadio title="Você deseja atuar em um time de qual categoria?" options={teamCategoryOptions} groupname="typeOptions" />

          {/* As opções de plano só aparecem após o usuário selecionar o tipo de perfil, pois os planos
             são baseados no tipo de usuário */}
          <AuthRadio title="Escolha um plano" options={plansOptions} groupname="plansOptions" />

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

      <Styled.PlansLayout>
        <Bubble>
          <Subtitle text="Plano grátis" uppercase as="h4" size={theme.sizes.xlarge} />
          <Styled.PlanDetails>
            <Styled.PlanInfo>Sed ut perspiciatis unde omnis sed ut perspiciatis unde omnis</Styled.PlanInfo>
            <Styled.PlanInfo>Sed ut perspiciatis unde omnis sed ut perspiciatis unde omnis</Styled.PlanInfo>
            <Styled.PlanInfo>Sed ut perspiciatis unde omnis sed ut perspiciatis unde omnis</Styled.PlanInfo>
            <Styled.PlanInfo>Sed ut perspiciatis unde omnis sed ut perspiciatis unde omnis</Styled.PlanInfo>
          </Styled.PlanDetails>
        </Bubble>

        <Bubble>
          <Subtitle text="Plano 1" uppercase as="h4" size={theme.sizes.xlarge} />
          <Styled.PlanDetails>
            <Styled.PlanInfo>Sed ut perspiciatis unde omnis sed ut perspiciatis unde omnis</Styled.PlanInfo>
            <Styled.PlanInfo>Sed ut perspiciatis unde omnis sed ut perspiciatis unde omnis</Styled.PlanInfo>
            <Styled.PlanInfo>Sed ut perspiciatis unde omnis sed ut perspiciatis unde omnis</Styled.PlanInfo>
            <Styled.PlanInfo>Sed ut perspiciatis unde omnis sed ut perspiciatis unde omnis</Styled.PlanInfo>
          </Styled.PlanDetails>
        </Bubble>

        <Bubble>
          <Subtitle text="Plano 2" uppercase as="h4" size={theme.sizes.xlarge} />
          <Styled.PlanDetails>
            <Styled.PlanInfo>Sed ut perspiciatis unde omnis sed ut perspiciatis unde omnis</Styled.PlanInfo>
            <Styled.PlanInfo>Sed ut perspiciatis unde omnis sed ut perspiciatis unde omnis</Styled.PlanInfo>
            <Styled.PlanInfo>Sed ut perspiciatis unde omnis sed ut perspiciatis unde omnis</Styled.PlanInfo>
            <Styled.PlanInfo>Sed ut perspiciatis unde omnis sed ut perspiciatis unde omnis</Styled.PlanInfo>
          </Styled.PlanDetails>
        </Bubble>

        <Bubble>
          <Subtitle text="Plano 3" uppercase as="h4" size={theme.sizes.xlarge} />
          <Styled.PlanDetails>
            <Styled.PlanInfo>Sed ut perspiciatis unde omnis sed ut perspiciatis unde omnis</Styled.PlanInfo>
            <Styled.PlanInfo>Sed ut perspiciatis unde omnis sed ut perspiciatis unde omnis</Styled.PlanInfo>
            <Styled.PlanInfo>Sed ut perspiciatis unde omnis sed ut perspiciatis unde omnis</Styled.PlanInfo>
            <Styled.PlanInfo>Sed ut perspiciatis unde omnis sed ut perspiciatis unde omnis</Styled.PlanInfo>
          </Styled.PlanDetails>
        </Bubble>
      </Styled.PlansLayout>

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
