import Prop from 'prop-types';
import React, { useState } from 'react';
import * as Styled from './AuthDropdown-Styles';

export function AuthDropdown({ }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Styled.AuthDropdownContainer>

      <Styled.DropdownButton onClick={toggleDropdown}>Dropdown</Styled.DropdownButton>

      <Styled.DropdownContent open={isOpen}>
        <Styled.DropdownItem href="#">Link 1</Styled.DropdownItem>
        <Styled.DropdownItem href="#">Link 2</Styled.DropdownItem>
        <Styled.DropdownItem href="#">Link 3</Styled.DropdownItem>
      </Styled.DropdownContent>
    </Styled.AuthDropdownContainer>
  );
}

AuthDropdown.propTypes = {
  children: Prop.node.isRequired,
};
