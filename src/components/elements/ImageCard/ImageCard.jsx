import Prop from 'prop-types';
import React from 'react';
import * as Styled from './ImageCard-Styles';

import { StyledLink } from '../StyledLink/StyledLink';

export function ImageCard({
  src, alt, title = '', islocked, path,
}) {
  return (
    <StyledLink path={path}>
      <Styled.ImageCardElement islocked={islocked}>
        <Styled.Image src={src} alt={alt} islocked={islocked} />

        {islocked && (
        <Styled.LockDiv islocked={islocked}>
          <img
            src="/assets/images/padlock.png"
            alt="cadeado"
          />
        </Styled.LockDiv>
        )}

        <Styled.Title>
          {title}
        </Styled.Title>
      </Styled.ImageCardElement>
    </StyledLink>
  );
}

ImageCard.propTypes = {
  src: Prop.string.isRequired,
  path: Prop.string.isRequired,
  alt: Prop.string,
  title: Prop.string,
  islocked: Prop.bool,
};
