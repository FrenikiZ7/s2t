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

export const darkFade = keyframes`
  from {
    backdrop-filter: blur(0.5px) brightness(0.4) contrast(1.2);

  }
  to {
    backdrop-filter: blur(0) brightness(1) contrast(1);
  }
`;
