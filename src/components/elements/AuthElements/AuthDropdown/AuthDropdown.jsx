import Prop from 'prop-types';
import React, { useState } from 'react';
import { KeyboardArrowDown as ArrowDownIcon, KeyboardArrowUp as ArrowUpIcon } from '@styled-icons/material-outlined';

import * as Styled from './AuthDropdown-Styles';
import { AuthInput } from '../AuthInput/AuthInput';

export function AuthDropdown({
  options, placeholder, title, id, required = false, onDropdownChange, selectedvalue, otheroption,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownText, setDropdownText] = useState();
  const other = { value: 'other', name: 'Outro' };
  const [otherInput, setOtherInput] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (option) => {
    onDropdownChange(option);
    setDropdownText(option.name);
    console.log(option);
  };

  return (
    <Styled.AuthDropdownContainer id={id}>

      {title && (
      <Styled.DropdownTitle>
        {title}
        {' '}
        {required ? '(Obrigatório)' : ''}
      </Styled.DropdownTitle>
      )}

      <Styled.DropdownButton onClick={toggleDropdown}>
        {dropdownText || placeholder || selectedvalue.charAt(0).toUpperCase() + selectedvalue.slice(1)}
        {isOpen ? (<ArrowUpIcon />) : (<ArrowDownIcon />)}
      </Styled.DropdownButton>

      {isOpen && (
      <Styled.DropdownContent onClick={toggleDropdown}>

        {placeholder && (
          <Styled.DropdownItem
            value={null}
            onClick={() => handleItemClick}
          >
            {placeholder}
          </Styled.DropdownItem>
        )}

        {options.map((option) => (
          <Styled.DropdownItem
            onClick={() => handleItemClick(option)}
            value={option.value}
            key={option.value}
          >
            {option.name}
          </Styled.DropdownItem>
        ))}

        {otheroption && (
          <Styled.DropdownItem
            onClick={() => handleItemClick(other)}
            value={other.value}
          >
            {other.name}
          </Styled.DropdownItem>
        )}

      </Styled.DropdownContent>
      )}

    </Styled.AuthDropdownContainer>
  );
}

AuthDropdown.propTypes = {
  options: Prop.arrayOf(
    Prop.shape({
      value: Prop.string.isRequired,
      name: Prop.string.isRequired,
    }),
  ).isRequired,
  placeholder: Prop.string,
  title: Prop.string,
  required: Prop.bool,
  id: Prop.string.isRequired,
  selectedvalue: Prop.string,
  otheroption: Prop.bool,
  onDropdownChange: Prop.func.isRequired,
};
