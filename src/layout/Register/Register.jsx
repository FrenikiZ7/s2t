import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import * as Styled from './Register-Styles';

import { Title } from '../../components/elements/Title/Title';

import { theme } from '../../styles/theme';
import { Button } from '../../components/elements/Button/Button';
import { Row } from '../../components/RowContainer/Row';

export function Register() {
  const [profileType, setProfileType] = useState('');

  return (
    <Styled.RegisterPage>

      <Title text="Você é" size={theme.sizes.xxlarge} uppercase />

      <Row>
        <Button
          text="Jogador"
          path="/register/player/semi-professional"
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
          path="/register/scout"
          bgcolor={theme.colors.primary}
          bghover={theme.colors.black}
          textcolor={theme.colors.black}
          texthover={theme.colors.primary}
          border={theme.colors.black}
          borderhover={theme.colors.primary}
          onclick={() => setProfileType('scout')}
        />
      </Row>

    </Styled.RegisterPage>

  );
}
