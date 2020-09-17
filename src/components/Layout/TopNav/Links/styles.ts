import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrap = styled.ul`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
  font-size: 13px;
`;

export const LinkWrap = styled.li`
  margin-right: 22px;
  justify-content: center;
  align-items: center;
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
  padding: 13px 0;
  color: ${props => props.theme.colors.custom3};
`;
