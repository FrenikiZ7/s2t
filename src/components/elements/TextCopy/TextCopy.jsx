import Prop from 'prop-types';
import React, { useState } from 'react';
import { ContentCopy } from '@styled-icons/material-outlined';
import * as Styled from './TextCopy-Styles';
import { Text } from '../Text/Text';
import { IconDiv } from '../IconDiv/IconDiv';
import { Subtitle } from '../Subtitle/Subtitle';
import { Row } from '../../RowContainer/Row';

export function TextCopy({ title, text }) {
  const [message, setMessage] = useState('');

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setMessage('Texto copiado com sucesso!');
      setTimeout(() => setMessage(''), 3500); // Remove a mensagem após 3 segundos
    } catch (error) {
      setMessage('Erro ao copiar o texto!');
      setTimeout(() => setMessage(''), 3500); // Remove a mensagem após 3
    }
  };

  return (
    <Styled.TextCopyContainer>

      <Text text={title} uppercase />

      <Row>
        <Styled.TextCopyElement>
          <Text text={text} />
          <IconDiv name="Copiar" onclick={handleCopyText}>
            <ContentCopy />
          </IconDiv>
        </Styled.TextCopyElement>

        {message && <Text text={message} />}
      </Row>

    </Styled.TextCopyContainer>

  );
}

TextCopy.propTypes = {
  title: Prop.string,
  text: Prop.string.isRequired,
};
