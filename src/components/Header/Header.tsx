import React, { memo } from 'react';

import { H1 } from 'styled';
import { Header } from './styled';

const HeaderComponent = () => {
  return (
    <Header>
      <H1> Header </H1>
    </Header>
  )
}

export default memo(HeaderComponent);

