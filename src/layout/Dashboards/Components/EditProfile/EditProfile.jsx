// import Prop from 'prop-types';
import React, { useContext } from 'react';
import * as Styled from './EditProfile-Styles';
import { AuthWrapper } from '../../../../components/elements/AuthElements/AuthWrapper/AuthWrapper';
import { AuthContainer } from '../../../../components/elements/AuthElements/AuthWrapper/AuthWrapper-Styles';
import { Subtitle } from '../../../../components/elements/Subtitle/Subtitle';
import { AuthForm } from '../../../../components/elements/AuthElements/AuthForm/AuthForm';
import { AuthInput } from '../../../../components/elements/AuthElements/AuthInput/AuthInput';
import { AuthRadio } from '../../../../components/elements/AuthElements/AuthRadio/AuthRadio';
import { AuthFile } from '../../../../components/elements/AuthElements/AuthFile/AuthFile';
import { Row } from '../../../../components/RowContainer/Row';
import { AuthHistoric } from '../../../../components/elements/AuthElements/AuthHistoric/AuthHistoric';
import { AuthAchievement } from '../../../../components/elements/AuthElements/AuthAchievement/AuthAchievement';
import { AuthQualCheck } from '../../../../components/elements/AuthElements/AuthQualificationCheck/AuthQualCheck';
import { AuthButton } from '../../../../components/elements/AuthElements/AuthButton/AuthButton';
import { theme } from '../../../../styles/theme';
import { PlayerContext } from '../../../../contexts/userContext/PlayerProvider/PlayerContext';

export function EditProfile() {
  const legOptions = [
    { value: 'right', label: 'Direita' },
    { value: 'left', label: 'Esquerda' },
  ];

  const categoryOptions = [
    { value: 'sub7', label: 'Sub-7 (6 e 7 anos)' },
    { value: 'sub8', label: 'Sub-8 (8 anos)' },
    { value: 'sub9', label: 'Sub-9 (8 e 9 anos)' },
    { value: 'sub11', label: 'Sub-11 (10 e 11 anos)' },
    { value: 'sub13', label: 'Sub-13 (12 e 13 anos)' },
    { value: 'sub15', label: 'Sub-15 (14 e 15 anos)' },
    { value: 'sub17', label: 'Sub-17 (16 e 17 anos)' },
    { value: 'sub20', label: 'Sub-20 (18, 19 e 20 anos)' },
    { value: 'adulto', label: 'Adulto (Já atua no time principal)' },
  ];

  const playerContext = useContext(PlayerContext);
  const { playerState, playerDispatch } = playerContext;
  return (

    <Styled.EditProfileContainer>
      <AuthWrapper>

        <AuthContainer>

          <AuthForm>

            <Subtitle text="Seu perfil" size={theme.sizes.xlarge} />

            <AuthInput
              type="name"
              name="name_input"
              id="name_input"
              placeholder="Seu nome completo"
              title="Nome"
            />

            <AuthRadio title="Qual a sua melhor perna?" options={legOptions} groupname="legOptions" />

            <AuthRadio title="Você atua em qual categoria?" options={categoryOptions} groupname="categoryOptions" />

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
              name="primaryBirthCountry_input"
              id="primaryBirthCountry_input"
              title="Nacionalide primária"
              placeholder="Seu nacionalide primária"
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

            <AuthInput
              type="text"
              name="mainPosition_input"
              id="mainPosition_input"
              title="Posição principal"
              placeholder="Sua posição principal"

            />

            <AuthInput
              type="text"
              name="secondaryPosition_input"
              id="secondaryPosition_input"
              title="Posição secundária"
              placeholder="Sua posição secundária"
            />

            <AuthInput
              type="text"
              name="tertiaryPosition_input"
              id="tertiaryPosition_input"
              title="Posição terciária"
              placeholder="Sua posição terciária"
            />

            <AuthFile text="Escolha sua foto de perfil (Recomendado: Imagens 1:1)" id="profileImage" />

            <AuthFile text="Escolha seu banner (Recomendado: Imagens 16:9)" id="bannerImage" />

            <Subtitle text="Sua história esportiva" size={theme.sizes.xlarge} />

            <Row>
              <AuthHistoric title="Histórico de clubes" id="Club" inputtitle="Clube" placeholder="Nome do Clube" />
              <AuthAchievement title="Histórico de títulos" id="titles" inputtitle="Competição" placeholder="Nome da competição" />
            </Row>

            <Subtitle text="Sua história acadêmica" size={theme.sizes.xlarge} />

            <AuthQualCheck title="Realizou a prova TOEFL?" groupname="toefl" required />
            <AuthQualCheck title="Realizou a prova ACT?" groupname="act" required />
            <AuthQualCheck title="Realizou a prova SAT?" groupname="sat" required />

            <AuthInput
              type="date"
              name="secondGrade_input"
              id="secondGrade_input"
              title="Ano de formatura do segundo grau"
              placeholder="Ano"
            />

            <AuthInput
              type="number"
              name="secondGradeGpa_input"
              id="secondGradeGpa_input"
              title="GPA (Grade Point Average)"
              placeholder="Nota média final"
            />

            <AuthHistoric title="Conhecimentos" id="Academic" inputtitle="Formação" placeholder="Nome da formação" />

            <AuthButton
              name="register_submit"
              id="register_submit"
              value="Confirmar alteração"
            />

          </AuthForm>
        </AuthContainer>

      </AuthWrapper>
    </Styled.EditProfileContainer>
  );
}

// EditProfile.propTypes = {
//   children: Prop.node.isRequired,
// };
