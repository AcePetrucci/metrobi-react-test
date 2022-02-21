import React, { memo } from 'react';

import { H1 } from 'styled';
import { Extra } from './styled';

const ExtraComponent = () => {
  return (
    <Extra>
      <H1> Extra Content </H1>
    </Extra>
  )
}

export default memo(ExtraComponent);

