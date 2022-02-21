import React, { memo } from 'react';

import { H1, Description } from 'styled';
import { Main } from './styled';

const MainComponent = () => {
  return (
    <Main>
      <H1> Main Content </H1>

      <Description>
        **If things do not look right, make sure your browser is in "Experimental Mode".
      </Description>
    </Main>
  )
}

export default memo(MainComponent);

