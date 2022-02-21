import React, { memo } from 'react';

import { H1 } from 'styled';
import { Hero } from './styled';

const HeroComponent = () => {
  return (
    <Hero>
      <H1> Hero </H1>
    </Hero>
  )
}

export default memo(HeroComponent);

