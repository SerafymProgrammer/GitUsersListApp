import React, { FunctionComponent } from 'react';
import './header.style.scss';

interface header_props {}

type Props = header_props;

const Header: FunctionComponent<Props> = (props) => {

  return (
      <header className={'header_app_block'}>
          <h1 className={'header_app_block_title'}>GitHub Searcher</h1>
      </header>
  );
};

export default Header;
