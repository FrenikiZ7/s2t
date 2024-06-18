import React, { useEffect, useState } from 'react';
import Prop from 'prop-types';
import * as Styled from './GridProposals-Styles';
import { Title } from '../Title/Title';
import { GridLayoutContainer } from '../../GridLayout/GridLayout-Styles';
import { ProposalCard } from '../ProposalCard/ProposalCard';
import { ProposalModal } from '../ProposalModal/ProposalModal';
import { AuthSearch } from '../AuthElements/AuthSearch/AuthSearch';
import { FilterProposals } from '../FilterProposals/FilterProposals';

export function GridProposals({ items, title }) {
  // Pagination stuff
  const [pageNumber, setPageNumber] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const pagesVisited = pageNumber * itemsPerPage;
  const displayItems = items.slice(pagesVisited, pagesVisited + itemsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // Altera o itemsPerPage baseado no Width
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 4 : 8);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Recebe os dados do card clicado pelo usuário
  const [selectedProposal, setSelectedProposal] = useState(null);

  const handleCardClick = (item) => {
    setSelectedProposal(item);
  };

  const handlePaginationClick = () => {
    window.scrollTo({
      top: 200,
      behavior: 'smooth',
    });
  };

  return (
    <Styled.GridProposalsContainer>

      {title && <Title text={title} uppercase />}
      <FilterProposals />

      <Styled.ModalContainer>

        <GridLayoutContainer>
          {displayItems.map((item) => (
            <ProposalCard
              from={item.details.from}
              date={item.details.date}
              opportunity={item.details.opportunity}
              category={item.details.category}
              country={item.details.country}
              org={item.details.org}
              orglogo={item.details.orglogo}
              orgpath={item.details.orgpath}
              onclick={() => handleCardClick(item)}
              id={item.opportunityId}
              key={item.opportunityId}
            />
          ))}
        </GridLayoutContainer>

        <Styled.StyledPaginate
          previousLabel="Anterior"
          nextLabel="Próximo"
          breakLabel="..."
          pageCount={Math.ceil(items.length / itemsPerPage)}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          onPageChange={changePage}
          containerClassName="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          activeClassName="active"
          onClick={handlePaginationClick}
        />

        {/* Renderiza um modal com os dados do card clicado pelo usuário */}
        {selectedProposal && (
          <ProposalModal
            from={selectedProposal.details.from}
            date={selectedProposal.details.date}
            opportunity={selectedProposal.details.opportunity}
            category={selectedProposal.details.category}
            country={selectedProposal.details.country}
            org={selectedProposal.details.org}
            orglogo={selectedProposal.details.orglogo}
            orgpath={selectedProposal.details.orgpath}
            minpayment={selectedProposal.details.payment.minPayment}
            maxpayment={selectedProposal.details.payment.maxPayment}
            description={selectedProposal.description}
            requirements={selectedProposal.requirements}
            onclick={() => setSelectedProposal(null)}
          />
        )}

      </Styled.ModalContainer>

    </Styled.GridProposalsContainer>
  );
}

GridProposals.propTypes = {
  title: Prop.string,
  items: Prop.arrayOf(Prop.object).isRequired,
  // n faço ideia oq é isso, só está assim pq foi o unico q n deu erro no console
};
