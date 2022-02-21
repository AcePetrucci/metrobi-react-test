import React, { memo } from 'react';

import { H1 } from 'styled';
import { RelatedPosts } from './styled';

const RelatedPostsComponent = () => {
  return (
    <RelatedPosts>
      <H1> Related Posts </H1>
    </RelatedPosts>
  )
}

export default memo(RelatedPostsComponent);

