import React from 'react';
import { Wrap, LinkWrap, LinkItem } from './styles';

const LINKS = [
  {
    text: 'Home',
    to: '/',
    isActive: false,
  },
];

const isActive = (to: string) => window.location.pathname === to;

const Links: React.FC = () => {
  return (
    <Wrap>
      {LINKS.map((link, key) => (
        <LinkWrap key={key}>
          <LinkItem
            to={`${link?.to}`}
            className={isActive(link.to) ? 'active' : ''}
          >
            {link?.text}
          </LinkItem>
        </LinkWrap>
      ))}
    </Wrap>
  );
};

export default Links;
