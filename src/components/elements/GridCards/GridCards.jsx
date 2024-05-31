import React, { useState } from 'react';
import Prop from 'prop-types';
import * as Styled from './GridCards-Styles';
import { Title } from '../Title/Title';
import { ImageCard } from '../ImageCard/ImageCard';
import { GridLayoutContainer, ItemContainer } from '../../GridLayout/GridLayout-Styles';
import { theme } from '../../../styles/theme';
import { Button } from '../Button/Button';

export function GridCards({ items, title }) {
  const [showMoreItems, setShowMoreItems] = useState(false);
  const itemsToShow = showMoreItems ? items : items.slice(0, 10);
  const handleShowMore = () => setShowMoreItems(!showMoreItems);

  return (
    <Styled.GridCardsContainer>

      <Title text={title} uppercase />

      <GridLayoutContainer>
        {itemsToShow.map((item) => (
          <ItemContainer key={item.id}>
            <ImageCard
              src={item.profileImageSrc}
              title={item.name}
              path={item.path}
            />
          </ItemContainer>
        ))}
      </GridLayoutContainer>

      {items?.length > 10 && (

      <Button
        onclick={handleShowMore}
        text={showMoreItems ? 'Mostrar menos' : 'Mostrar mais'}
        bgcolor={theme.colors.black}
        bghover={theme.colors.white}
        textcolor={theme.colors.white}
        texthover={theme.colors.black}
        border={theme.colors.white}
        borderhover={theme.colors.white}
      />
      )}
    </Styled.GridCardsContainer>
  );
}

GridCards.propTypes = {
  title: Prop.string,
  items: Prop.arrayOf(Prop.object).isRequired,
  // n faço ideia oq é isso, só está assim pq foi o unico q n deu erro no console
};
