import React, { memo } from 'react';

import { H1 } from 'styled';
import { RelatedImages } from './styled';

const RelatedImagesComponent = () => {
  return (
    <RelatedImages>
      <H1> Related Images </H1>
    </RelatedImages>
  )
}

export default memo(RelatedImagesComponent);

