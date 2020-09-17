import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 44px;
  height: 100vh;
`;

export const PageId = styled.div`
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  text-align: center;
`;

export const CanvasWrapper = styled.div`
  height: 500vh;
`;

export const Canvas = styled.canvas`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 100vw;
  max-height: 100vh;
`;
