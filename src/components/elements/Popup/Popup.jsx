import Prop from 'prop-types';
import React, { useState } from 'react';
import * as Styled from './Popup-Styles';
import { theme } from '../../../styles/theme';
import { Row } from '../../RowContainer/Row';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';

export function Popup({
  isopen, onclick, firstoption, firstpath, secondoption, secondpath, title,
}) {
  return (
    <>
      {isopen && <Styled.PopupOverlay />}

      <Styled.PopupElement open={isopen}>

        <Text text={title} uppercase />

        <Row>
          <Button
            text={firstoption}
            path={firstpath}
            bgcolor={theme.colors.white}
            bghover={theme.colors.lightprimary}
            textcolor={theme.colors.black}
            texthover={theme.colors.black}
            border={theme.colors.black}
            borderhover={theme.colors.black}
            onclick={onclick}
          />

          <Button
            text={secondoption}
            path={secondpath}
            bgcolor={theme.colors.white}
            bghover={theme.colors.lightprimary}
            textcolor={theme.colors.black}
            texthover={theme.colors.black}
            border={theme.colors.black}
            borderhover={theme.colors.black}
            onclick={onclick}
          />
        </Row>
      </Styled.PopupElement>
    </>
  );
}

Popup.propTypes = {
  title: Prop.string,
  isopen: Prop.bool,
  onclick: Prop.func,
  firstoption: Prop.string,
  firstpath: Prop.string,
  secondoption: Prop.string,
  secondpath: Prop.string,
};
