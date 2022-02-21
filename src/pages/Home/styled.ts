import styled from 'styled-components';

// Helpers
import { pxToRem } from 'styled';

// Styled
export const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: ${pxToRem(12, 6)};
  height: ${pxToRem(1215)};
  justify-content: space-between;
  margin: ${pxToRem(12, 0)};

  &::before,
  &::after {
    content: '';
    order: 2;
    flex-basis: 100%;
  }

  @media screen and (max-width: 1360px) {
    height: ${pxToRem(915)};
  }

  @media screen and (max-width: 1080px) {
    height: ${pxToRem(715)};
  }

  @media screen and (max-width: 600px) {
    flex-direction: row;

    &::before,
    &::after {
      display: none;
    }
  }
`;

export const RelatedContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: ${pxToRem(12)};
  height: ${pxToRem(250)};
  justify-content: space-between;
  margin-bottom: ${pxToRem(12)};

  @media screen and (max-width: 1360px) {
    height: ${pxToRem(180)};
  }
`;