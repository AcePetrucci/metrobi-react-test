import React, { memo } from 'react';

import { H1 } from 'styled';
import { Sidebar } from './styled';

const SidebarComponent = () => {
  return (
    <Sidebar>
      <H1> Sidebar </H1>
    </Sidebar>
  )
}

export default memo(SidebarComponent);

