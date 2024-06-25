import Prop from 'prop-types';
import React, { useState } from 'react';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import * as Styled from './ReportModal-Styles';
import { AuthDropdown } from '../AuthElements/AuthDropdown/AuthDropdown';
import { IconDiv } from '../IconDiv/IconDiv';
import { Subtitle } from '../Subtitle/Subtitle';
import { Column } from '../../ColumnContainer/Column';
import { TextArea } from '../TextArea/TextArea';
import { AuthForm } from '../AuthElements/AuthForm/AuthForm';
import { AuthButton } from '../AuthElements/AuthButton/AuthButton';
import { Row } from '../../RowContainer/Row';
import { theme } from '../../../styles/theme';
import { Popup } from '../Popup/Popup';
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';

export function ReportModal({ onclick }) {
  const [reported, setReported] = useState(false);
  const reportOptions = [
    { value: 'teste', text: 'teste' },
    { value: 'teste', text: 'teste' },
    { value: 'teste', text: 'teste' },
    { value: 'teste', text: 'teste' },
    { value: 'teste', text: 'teste' },
    { value: 'teste', text: 'teste' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setReported(true);
  };

  return (
    <Styled.ReportModalElement>

      {!reported && (
      <>
        <Row>
          <Subtitle text="Reportar" uppercase size={theme.sizes.xxlarge} />

          <IconDiv
            onclick={onclick}
            name="Fechar"
          >
            <CloseIcon />
          </IconDiv>

        </Row>

        <AuthForm>
          <AuthDropdown
            title="Por qual motivo está reportando essa foto ou vídeo?"
            id="competitiveCategory"
            placeholder="Escolha o motivo"
            options={reportOptions}
            required
          />

          <Column>
            {/* <Subtitle text="Insira mais detalhes" uppercase /> */}
            <TextArea placeholder="Insira mais detalhes sobre o motivo (Opcional)" info="description" />
          </Column>

          <AuthButton
            name="report_submit"
            id="report_submit"
            value="Confirmar"
            onclick={handleSubmit}
          />

        </AuthForm>
      </>
      )}

      {reported && (
        <>
          <Text text="Recebemos a sua denúncia!" uppercase />
          <Text text="Obrigado por nos ajudar a manter nossa plataforma segura e livre de conteúdo impróprio. Sua denúncia será cuidadosamente analisada por nossa equipe. " />
          <Button
            text="Fechar"
            bgcolor={theme.colors.secondary}
            bghover={theme.colors.quaternary}
            textcolor={theme.colors.white}
            texthover={theme.colors.white}
            border={theme.colors.white}
            borderhover={theme.colors.white}
            onclick={onclick}
          />
        </>
      )}

    </Styled.ReportModalElement>
  );
}

ReportModal.propTypes = {
  onclick: Prop.func,
};
