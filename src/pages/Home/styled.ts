import styled from 'styled-components';

// Helpers
import { pxToRem } from 'styled';

// Styled
export const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: ${pxToRem(12)};
  justify-content: space-between;
  margin: ${pxToRem(12, 0)};
  max-height: ${pxToRem(1215)};

  @media screen and (max-width: 1360px) {
    max-height: ${pxToRem(915)};
  }

  @media screen and (max-width: 1080px) {
    max-height: ${pxToRem(715)};
  }

  @media screen and (max-width: 600px) {
    max-height: initial;
    flex-direction: row;
  }
`;

export const RelatedContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: ${pxToRem(12)};
  justify-content: space-between;
  margin-bottom: ${pxToRem(12)};
`;