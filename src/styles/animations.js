import { keyframes } from 'styled-components';

export const zoomIn = keyframes`
  from {
    transform: scale(0.8);
    opacity: 0.5;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const slideIn = keyframes`
  from {
    transform: translateY(30% );
    opacity: 0.5;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const slideInRight = keyframes`
  from {
    transform: translateX(-100%); 
    opacity: 0; 
  }

  to {
    transform: translateX(0); 
    opacity: 1; 
  }
`;

export const slideInLeft = keyframes`
  from {
    transform: translateX(100%); 
    opacity: 0; 
  }

  to {
    transform: translateX(0); 
    opacity: 1; 
  }
`;

export const slideOut = keyframes`
  from {
    transform: translateY(-100px);
    opacity: 0.5;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;

  }
  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;

  }
  to {
    opacity: 0;
  }
`;
