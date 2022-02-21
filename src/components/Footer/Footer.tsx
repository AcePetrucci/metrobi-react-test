import React, { memo } from 'react';

import { H1 } from 'styled';
import { Footer } from './styled';

const FooterComponent = () => {
  return (
    <Footer>
      <H1> Footer </H1>
    </Footer>
  )
}

export default memo(FooterComponent);

