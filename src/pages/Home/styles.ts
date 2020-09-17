import styled from 'styled-components';

export const Container = styled.div``;

export const Wrap = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
`;

export const PageId = styled.div`
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
`;
