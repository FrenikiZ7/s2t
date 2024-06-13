import styled, { css } from 'styled-components';

export const AuthDropdownContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: inline-block;
  `}
`;

export const DropdownContent = styled.div`
  ${({ theme }) => css`
    display: ${({ open }) => (open ? 'block' : 'none')};
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  `}
`;

export const DropdownItem = styled.a`
  ${({ theme }) => css`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;

  &:hover {
    background-color: #f1f1f1;
  }
  `}
`;

export const DropdownButton = styled.button`
  ${({ theme }) => css`
  background-color: #333;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  `}
`;
